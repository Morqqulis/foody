'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@ui/form'
import { Input } from '@ui/input'
import { Label } from '@ui/label'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { getDefaultValues, getSchema } from '../../utls/getShema'
import MyFormLabel from './MyFormLabel'

import { collections, databases, dbId, ID } from '@libs/appwrite/config'
import { addDocuments, deleteImage, editDocuments, getDocuments, getListDocuments, uploadImage } from '../../utls/functions'
import { categoryData, productData, readerFile, restaurantData, translateUrl } from '../helper/helper'
import { toast } from './use-toast'

interface IMyform {
  whatIs: string
  actionId?: string
}

const scrollbarStyles = `
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #EF5DA8;
  }
`

const Myform: React.FC<IMyform> = ({ whatIs, actionId }): JSX.Element => {
  const [file, setFile] = useState<File | null>(null)
  const [fileUrl, setFileUrl] = useState<string | null>(null)
  const [formatedSelectOption, setFormattedSelectOption] = useState<any[]>([])
  const [prevValue, setPrevValue] = useState<any>(null)

  const getDocSelections = async (collectionId: string) => {
    const res = await getListDocuments(collectionId)
    const data = res.documents?.map((item: any) => ({ id: item.$id, name: item.name }))
    setFormattedSelectOption(data)
  }

  const getDocItem = async (collectionId: string, docId: string) => {
    const res = await getDocuments(collectionId, docId)
    setPrevValue(res)
  }

  useEffect(() => {
    switch (whatIs) {
      case 'EditProduct':
        getDocSelections(collections.restaurantsId)
        getDocItem(collections.productsId, actionId)
        break
      case 'AddProduct':
        getDocSelections(collections.restaurantsId)
        break
      case 'EditCategory':
        getDocItem(collections.categoriesId, actionId)
        break
      case 'AddRestaurant':
        getDocSelections(collections.categoriesId)
        break
      case 'EditRestaurant':
        getDocSelections(collections.categoriesId)
        getDocItem(collections.restaurantsId, actionId)
        break
      case 'EditOffer':
        getDocItem(collections.offersId, actionId)
        break
      default:
        break
    }
  }, [whatIs, actionId])

  const schema = getSchema(whatIs)
  const values = getDefaultValues(whatIs)

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: values
  })

  const submit = async (v: any) => {
    if (whatIs.startsWith('Add') && !file) {
      toast({
        title: 'Upload image',
        description: 'Add Form fields must not be empty',
        variant: 'destructive',
        duration: 2000
      })
      return
    }

    if (Object.values(v).filter((item: any) => item != '').length === 0 && !file) return

    switch (whatIs) {
      case 'EditProduct':
        const objpp = productData(prevValue)
        const objcp = productData(v)
        editDocuments(collections.productsId, { ...objpp, ...objcp }, file, actionId)

        break
      case 'AddProduct':
        addDocuments(collections.productsId, v, file)
        break
      case 'EditCategory':
        const objpc = categoryData(prevValue)
        const objcc = categoryData(v)
        editDocuments(collections.categoriesId, { ...objpc, ...objcc }, file, actionId)
        break
      case 'AddCategory':
        addDocuments(collections.categoriesId, v, file)

        break
      case 'AddRestaurant':
        addDocuments(collections.restaurantsId, v, file)
        break
      case 'EditRestaurant':
        const objpr = restaurantData(prevValue)
        const objcr = restaurantData(v)

        editDocuments(collections.restaurantsId, { ...objpr, ...objcr }, file, actionId)
        break
      case 'AddOffer':
        const imageInfo = await uploadImage(file)
        const strValue = JSON.stringify({ ...v, ...imageInfo })
        databases.createDocument(dbId, collections.offersId, ID.unique(), { offer: strValue })
        break

      case 'EditOffer':
        const prev = JSON.parse(prevValue.offer)
        const img = await uploadImage(file)
        const updatedData = {
          description: v.decription ? v.decription : prev.description,
          image: img ? img.image : prev.image,
          imageId: img ? img.imageId : prev.imageId,
          title: v.title ? v.title : prev.title
        }

        databases.updateDocument(dbId, collections.offersId, actionId, { offer: JSON.stringify(updatedData) })
        img && deleteImage(prev.imageId)
        break
      default:
        break
    }

    form.reset()
    setFileUrl(null)
    setFile(null)
    setFormattedSelectOption([])
    setPrevValue(null)

    toast({
      title: 'Success',
      description: 'Form request is succesfully sent',
      variant: 'dark',
      duration: 2000
    })
  }
  const t = useTranslations(`Admin.${translateUrl(whatIs)}.Sheet`)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="flex flex-col h-[calc(100vh-70px)] gap-8 mmd:w-full">
        <div className="flex items-center justify-between md:gap-10 mmd:flex-col">
          <div className="flex basis-1/3 flex-col gap-2">
            <p className="flex h-[32px] items-center text-[18px] font-medium leading-[24px] text-[#C7C7C7] mmd:w-full">
              {t('imageBlock.description')}
            </p>
            {fileUrl && <Image src={fileUrl} width={154} height={125} alt="upload" priority style={{ width: '154px', height: '125px' }} />}
          </div>
          <Label className="flex w-full py-6 max-w-[526px] flex-col items-center justify-center gap-2 rounded-[14px] bg-[#43445A] ">
            <Image src="/Form/uploadFile.svg" width={60} height={40} alt="upload" priority />
            <p className="text-[18px] font-medium leading-[24px] text-[#C7C7C7]"> {file ? file.name : t('imageBlock.label')}</p>
            <Input type="file" className="hidden" onChange={(e) => readerFile(e, setFile, setFileUrl)} />
          </Label>
        </div>

        <div className="flex h-fit grow justify-between md:gap-10 mmd:flex-col">
          <p className="flex h-[30px] w-[252px] flex-row items-center text-left text-[18px] font-medium leading-[24px] text-[#C7C7C7] mmd:w-full">
            {t('InfoBlock.text')}
          </p>

          <div className="mt-8 flex  flex-col h-fit overflow-y-auto max-h-full items-center gap-2 overflow-x-auto rounded-[14px] bg-[#43445A]  py-[20px] md:w-[526px] mmd:w-full">
            <style>{scrollbarStyles}</style>
            {whatIs === 'EditProduct' || whatIs === 'AddProduct' ? (
              <>
                <MyFormLabel whatIs={whatIs} form={form} name="name" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="description" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="price" inputType="number" />
                <MyFormLabel whatIs={whatIs} form={form} name="restaurant" inputType="text" options={formatedSelectOption} />
              </>
            ) : whatIs === 'AddRestaurant' || whatIs === 'EditRestaurant' ? (
              <>
                <MyFormLabel whatIs={whatIs} form={form} name="name" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="cuisine" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="deliveryPrice" inputType="number" />
                <MyFormLabel whatIs={whatIs} form={form} name="deliveryMin" inputType="number" />
                <MyFormLabel whatIs={whatIs} form={form} name="address" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="category" inputType="text" options={formatedSelectOption} />
              </>
            ) : whatIs === 'AddCategory' ? (
              <>
                <MyFormLabel whatIs={whatIs} form={form} name="name" inputType="text" />
              </>
            ) : whatIs === 'AddOffer' || whatIs === 'EditOffer' ? (
              <>
                <MyFormLabel whatIs={whatIs} form={form} name="title" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="description" inputType="text" />
              </>
            ) : whatIs === 'EditCategory' ? (
              <>
                <MyFormLabel whatIs={whatIs} form={form} name="name" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="slug" inputType="text" />
              </>
            ) : (
              ''
            )}
          </div>
        </div>

        <div className="flex w-full justify-center items-center gap-10 border-t-2 border-t-[#43445A] p-[20px]">
          <button
            type="button"
            onClick={() => form.reset()}
            className="box-border h-[50px] w-[400px] rounded-lg border-2 border-solid border-[#38394e] bg-[#43445a] text-white"
          >
            {t('cancelBtn')}
          </button>
          <button type="submit" className="box-border h-[50px] w-[400px] rounded-lg border-2 border-[#c035a2] bg-[#c035a2] text-white">
            {t('submitBtn')}
          </button>
        </div>
      </form>
    </Form>
  )
}

export default Myform
