import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack screenOptions={{}}>
        <Stack.Screen
            name='index'
            options={{title: 'Entrar', headerShown: false }}
        />
        <Stack.Screen
            name='sign-up'
            options={{title: 'Criar conta'}}
        />
    </Stack>
  )
}