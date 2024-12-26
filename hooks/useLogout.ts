
import { useRouter } from 'next/navigation'
import { setIsAuth } from '@/context/auth'
import { useAuth0 } from '@auth0/auth0-react'

export const useUserLogout = () => {
  const router = useRouter()
  const { logout } = useAuth0()

  return () => {
    logout({ clientId: `${process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}` })
    localStorage.removeItem('auth')
    setIsAuth(false)
    router.push('/')
  }
}
