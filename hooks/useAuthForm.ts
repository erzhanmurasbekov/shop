import { EventCallable, Store } from 'effector'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { IInputs, ISignUpFx } from '@/types/authPopup'
import { useAuth0 } from '@auth0/auth0-react'

export const useAuthForm = (
  initialSpinner: Store<boolean>,
  isSideActive: boolean,
  event: EventCallable<ISignUpFx>
) => {
  const spinner = useUnit(initialSpinner)
  const { isAuthenticated, user, loginWithPopup } = useAuth0();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IInputs>()

  useEffect(() => {
    if (isSideActive) {
      if (isAuthenticated) {
        event({
          name: user?.displayName as string,
          email: user?.email as string,
          password: user?.uid as string,
          isOAuth: true,
        })
      }
    }
  }, [isAuthenticated])

  const handleSignupWithOAuth = () =>
    loginWithPopup()

  return {
    spinner,
    register,
    errors,
    handleSubmit,
    handleSignupWithOAuth,
  }
}
