import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { account } from '@libs/appwrite/config'

export const useAuth = async () => {
  const router = useRouter()
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await account.get()
      } catch (error) {
        router.push('/login')
      }
    }

    checkAuth()
  }, [router])
}
