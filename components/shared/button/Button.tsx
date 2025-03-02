import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface CustomButtonProps {
    onPress: (data?: any) => void
    label: string
    disabled?: boolean
    variant?: 'icon' | 'default'
    icon?: React.ReactNode

}

const Button: FC<CustomButtonProps> = ({ onPress, label, disabled = false, variant = 'default', icon }) => {
    return (
        <TouchableOpacity className={`${variant === 'icon' ? 'h-[56px] w-[56px]' : ''} bg-primary p-4 rounded-full flex items-center ${disabled ? 'bg-secondary' : ''}`} onPress={onPress} disabled={disabled}>
            {
                variant === 'icon' && (
                    <View className='h-full w-full flex items-center justify-center'>
                        {icon}
                    </View>
                )
            }
            {
                variant === 'default' && (
                    <Text className='text-white text-lg font-500 font-robotoSans'>{label}</Text>
                )
            }

        </TouchableOpacity>
    )
}

export default Button