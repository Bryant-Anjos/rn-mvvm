import { useState } from 'react'
import { Alert } from 'react-native'
import { login } from '../../common/repositories/AuthRepository'

const useLoginViewModel = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async () => {
    try {
      setIsLoading(true)
      const response = await login({ email, password })
      console.log('response', response)
    } catch (error) {
      Alert.alert('Oops!', 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    onSubmit,
  }
}

export default useLoginViewModel
