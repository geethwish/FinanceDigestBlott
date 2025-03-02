import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const DashboardLayout = () => {
    return (
        <>

            <Stack>
                <Stack.Screen name="dashboard" options={{
                    headerShown: false,
                }} />
            </Stack>
            <StatusBar backgroundColor="#16162" style="light" />
        </>

    )
}

export default DashboardLayout

const styles = StyleSheet.create({})