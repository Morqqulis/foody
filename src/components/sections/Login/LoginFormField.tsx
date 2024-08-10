import { Button } from '@ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/form'
import { Input } from '@ui/input'
import { useTranslations } from 'next-intl'
import { HTMLInputTypeAttribute, useState } from 'react'
import { IconEye } from '../../icons'

interface ILoginFormField {
  form: any
  name: string
  placeholder?: string
  inputType?: HTMLInputTypeAttribute
}

const LoginFormField = ({ form, name, placeholder, inputType }: ILoginFormField): JSX.Element => {
  const t = useTranslations('Login.form')

  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`relative`}>
          <FormLabel className={`text-xl font-medium text-gray-2`}>{t(name)}</FormLabel>
          <FormControl className={`bg-transparent`}>
            <Input
              className={`placeholder:text-gray-1 mt-2 block h-full w-full rounded-md bg-light-red px-3 py-4 text-lg text-gray-2 placeholder:text-lg placeholder:duration-300 focus:outline-none focus:ring-0 focus:placeholder:opacity-0 focus-visible:ring-1 focus-visible:ring-mainOrange md:mt-2.5 lg:px-6 lg:py-5 `}
              placeholder={placeholder}
              {...field}
              name={name}
              type={showPassword ? 'text' : inputType}
            />
          </FormControl>
          <FormMessage />
          {inputType === 'password' && (
            <Button
              className={`group/showPassword absolute right-2.5 top-1/2 -translate-y-[25%]`}
              type={'button'}
              aria-label={showPassword ? 'Hide' : 'Show'}
              onClick={() => setShowPassword(!showPassword)}
              variant={'ghost'}
            >
              <IconEye className={`h-auto w-8 fill-black group-hover/showPassword:fill-mainRed`} />
            </Button>
          )}
        </FormItem>
      )}
    />
  )
}

export default LoginFormField
