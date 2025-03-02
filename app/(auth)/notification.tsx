import RequestNotificationPermission from '@/components/requestNotificationPermission/RequestNotificationPermission'
import Button from '@/components/shared/button/Button'
import Notification from '@/components/shared/svgIcons/Notification'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'



const NotificationScreen = () => {
    return (
        <SafeAreaView className="bg-light h-full box-border">

            <View className='w-full h-full flex items-center justify-between'>
                <View className='w-full p-8'></View>
                <View className='p-8 flex items-center justify-center flex-col'>
                    <Notification width={98} height={98} />
                    <Text className='mt-[24px] text-[24px] font-700 font-robotoSans text-textPrimary'>Get the most out of Blott ✅</Text>
                    <Text className='mt-[16px] text-[16px] font-400 font-robotoSans text-textSecondary text-center max-w-[80%]'>Allow notifications to stay in the loop with your payments, requests and groups.</Text>
                </View>

                <View className='w-full p-8'>
                    <RequestNotificationPermission />
                </View>


            </View>
        </SafeAreaView>
    )
}

export default NotificationScreen