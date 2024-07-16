import { useTranslations } from 'next-intl'

interface IHeaderInput {
   className?: string
}

const HeaderInput: React.FC<IHeaderInput> = ({
   className
}: IHeaderInput): JSX.Element => {
   const t = useTranslations('Header')
   return (
      <input
         className={`focus:ring-mainOragne w-full max-w-[304px] rounded-[10px] bg-background px-5 py-3 font-light leading-[19px] text-black placeholder:text-black placeholder:duration-300 focus:placeholder:opacity-0 ${className || ''}`}
         type="text"
         placeholder={t('search')}
      />
   )
}

export default HeaderInput
