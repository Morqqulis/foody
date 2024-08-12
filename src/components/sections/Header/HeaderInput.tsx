'use client'
import { useTranslations } from 'next-intl'
import SearchModal from './HeaderModal'
import { useState } from 'react'
interface IHeaderInput {
  className?: string
}

const HeaderInput: React.FC<IHeaderInput> = ({ className }: IHeaderInput): JSX.Element => {
  const t = useTranslations('Header')
  const [showModal, setShowModal] = useState(false)
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <input
        className={`focus:ring-mainOragne relative w-full max-w-[304px] rounded-[10px] bg-background px-5 py-3 font-light leading-[19px] text-black placeholder:text-black placeholder:duration-300  focus:placeholder:opacity-0 ${className || ''}`}
        type="text"
        placeholder={t('search')}
        value={inputValue}
        onChange={(e) => {
          e.target.value.length > 0 ? setShowModal(true) : setShowModal(false)
          setInputValue(e.target.value)
        }}
      />
      {showModal && <SearchModal setShowModal={setShowModal} value={inputValue} setInputValue={setInputValue} />}
    </>
  )
}

export default HeaderInput
