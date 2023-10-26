import React from 'react'
import { Button, SafeAreaView, Text, TextInput, View } from 'react-native'
import useLoginViewModel from './viewModel'

const LoginView: React.FC = () => {
  const { email, password, setEmail, setPassword, isLoading, onSubmit } =
    useLoginViewModel()

  return (
    <SafeAreaView className="flex flex-1 justify-center px-5">
      <View>
        <Text>E-mail</Text>
        <TextInput
          placeholder="usuario@email.com"
          value={email}
          onChangeText={setEmail}
        />

        <Text>Password</Text>
        <TextInput
          placeholder="********"
          value={password}
          onChangeText={setPassword}
        />

        <Button title="login" onPress={onSubmit} disabled={isLoading} />
      </View>
    </SafeAreaView>
  )
}

export default LoginView
