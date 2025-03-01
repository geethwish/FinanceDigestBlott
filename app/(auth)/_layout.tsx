import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="RegisterScreen" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#16162" style="dark" />
    </>

  )
}

export default AuthLayout

const styles = StyleSheet.create({})