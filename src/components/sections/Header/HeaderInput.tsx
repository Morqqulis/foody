'use client'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'
import SearchModal from './HeaderModal'
interface IHeaderInput {
  className?: string
}

const HeaderInput: React.FC<IHeaderInput> = ({ className }: IHeaderInput): JSX.Element => {
  const t = useTranslations('Header')
  const [showModal, setShowModal] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current)
    }

    debounceTimeout.current = setTimeout(() => {
      const inputLength = e.target.value.length
      setShowModal(inputLength > 0)
      setInputValue(e.target.value)
      debounceTimeout.current = null
    }, 500)
  }

  return (
    <>
      <input
        className={`focus:ring-mainOragne relative w-full max-w-[304px] rounded-[10px] bg-background px-5 py-3 font-light leading-[19px] text-black placeholder:text-black placeholder:duration-300  focus:placeholder:opacity-0 ${className || ''}`}
        type="text"
        placeholder={t('search')}
        onChange={handleChange}
      />
      {showModal && <SearchModal setShowModal={setShowModal} value={inputValue} />}
    </>
  )
}

export default HeaderInput
