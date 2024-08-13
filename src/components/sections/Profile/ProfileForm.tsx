'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconUpload } from '@icons'
import { collections, databases, dbId } from '@libs/appwrite/config'
import { Button } from '@ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/form'
import { Input } from '@ui/input'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { deleteImage, getDocuments, uploadImage } from '../../../utls/functions'
import { readerFile } from '../../helper/helper'

interface IProfileForm {}

const ProfileSchema = z.object({
  avatar: z.any(),
  contacts: z.string({ message: 'Please enter your contact' }),
  email: z.string({ message: 'Please enter your email' }),
  userName: z.string({ message: 'Please enter your username' }),
  fullName: z.string({ message: 'Please enter your full name' }),
  address: z.string({ message: 'Please enter your address' })
})

const ProfileForm: FC = (): JSX.Element => {
  const [file, setFile] = useState<File | null>(null)
  const [fileUrl, setFileUrl] = useState<string | null>(null)
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('userId')
    if (token != '') setUserId(token)

    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem('userId')
      if (updatedToken != '') setUserId(updatedToken)
    }

    window.addEventListener('storage', handleStorageChange)

    if (userId) {
      ;(async () => {
        const data = await getDocuments(collections.userId, userId)
        console.log(data);
        
        const { email } = data
        const info = { ...JSON.parse(data.userInfo), email }
        setUser(info)
      })()
    }

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [userId])

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      avatar: '',
      contacts: '',
      email: '',
      userName: '',
      fullName: '',
      address: ''
    }
  })

  async function onSubmit(values: z.infer<typeof ProfileSchema>) {
    const userId = localStorage.getItem('userId')
    const user = await getDocuments(collections.userId, userId)
    const userCurrentInfo = JSON.parse(user.userInfo)

    if (file) {
      const url = userCurrentInfo.avatarId
      url != '' && deleteImage(url)
    }

    const { image, imageId } = file ? await uploadImage(file) : { image: null, imageId: '' }

    const updatedInfo = {
      email: values.email || userCurrentInfo.email,
      userInfo: JSON.stringify({
        address: values.address || userCurrentInfo.address,
        avatar: image ? image.href : userCurrentInfo.avatar,
        avatarId: imageId || userCurrentInfo.avatarId,
        contacts: values.contacts || userCurrentInfo.contacts,
        fullName: values.fullName || userCurrentInfo.fullName,
        userName: values.userName || userCurrentInfo.userName
      })
    }

    await databases.updateDocument(dbId, collections.userId, userId, updatedInfo)
  }
  return (
    <Form {...form}>
      <form className={`flex w-full flex-col`} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="avatar"
          render={({ field }) => (
            <FormItem className={`mb-9 flex w-full items-center justify-center`}>
              <FormLabel
                className={`flex h-[145px] w-[145px] flex-col items-center justify-center gap-4 rounded-full bg-white text-center duration-300 hover:cursor-pointer hover:bg-gray-2`}
              >
                {fileUrl ? (
                  <Image src={fileUrl} alt="avatar" width={145} height={145} className="h-full w-full rounded-full" />
                ) : user?.avatar ? (
                  <>
                    <Image src={user.avatar} alt="avatar" width={145} height={145} className="h-full w-full rounded-full" />
                  </>
                ) : (
                  <>
                    <IconUpload />
                    <span>Upload</span>
                  </>
                )}
              </FormLabel>
              <FormControl>
                <Input className={`hidden`} placeholder="Upload" type={'file'} {...field} onChange={(e) => readerFile(e, setFile, setFileUrl)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className={`grid h-fit grid-cols-2 gap-12`}>
          <FormField
            name={'contacts'}
            control={form.control}
            render={({ field }) => (
              <FormItem className={`flex flex-col gap-1`}>
                <FormLabel className={`font-semibold text-gray-2`}>Contact</FormLabel>
                <FormControl className={``}>
                  <Input
                    className={`px-5 py-[25px]  placeholder:text-lg placeholder:duration-300 focus-visible:ring-mainRed focus-visible:placeholder:text-opacity-0`}
                    placeholder={user?.contacts ? user.contacts : '+99400-000-0000'}
                    type={'tel'}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name={'email'}
            control={form.control}
            render={({ field }) => (
              <FormItem className={`flex flex-col gap-1`}>
                <FormLabel className={`font-semibold capitalize text-gray-2`}>Email</FormLabel>
                <FormControl className={``}>
                  <Input
                    className={`px-5 py-[25px]  placeholder:text-lg placeholder:duration-300 focus-visible:ring-mainRed focus-visible:placeholder:text-opacity-0`}
                    placeholder={user?.email ? user.email : 'johndoe@gmail.com'}
                    {...field}
                    type={'email'}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name={'userName'}
            control={form.control}
            render={({ field }) => (
              <FormItem className={`flex flex-col gap-1`}>
                <FormLabel className={`font-semibold capitalize text-gray-2`}>username</FormLabel>
                <FormControl className={``}>
                  <Input
                    className={`px-5 py-[25px]  placeholder:text-lg placeholder:duration-300 focus-visible:ring-mainRed focus-visible:placeholder:text-opacity-0`}
                    placeholder={user?.userName ? user.userName : 'johndoe'}
                    {...field}
                    type={'text'}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name={'address'}
            control={form.control}
            render={({ field }) => (
              <FormItem className={`flex flex-col gap-1`}>
                <FormLabel className={`font-semibold capitalize text-gray-2`}>address</FormLabel>
                <FormControl className={``}>
                  <Input
                    className={`px-5 py-[25px]  placeholder:text-lg placeholder:duration-300 focus-visible:ring-mainRed focus-visible:placeholder:text-opacity-0`}
                    placeholder={user?.address ? user.address : 'Ataturk 45 Ganclik Baku'}
                    type={'text'}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name={'fullName'}
            control={form.control}
            render={({ field }) => (
              <FormItem className={`flex flex-col gap-1`}>
                <FormLabel className={`font-semibold capitalize text-gray-2`}>full Name</FormLabel>
                <FormControl className={``}>
                  <Input
                    className={`px-5 py-[25px] placeholder:text-lg placeholder:text-foreground placeholder:duration-300 focus-visible:ring-mainRed focus-visible:placeholder:text-opacity-0`}
                    placeholder={user?.fullName ? user.fullName : 'John Doe'}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className={`self-end bg-[#6FCF97] py-[25px] text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-mainRed`}
            variant={'ghost'}
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ProfileForm
