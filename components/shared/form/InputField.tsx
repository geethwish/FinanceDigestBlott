import React, { FC } from 'react'
import { Text, TextInput } from 'react-native'

interface InputFieldProps {
    value: string
    onChangeText: (value: string) => void
    placeholder: string
    onBlur: (key: string) => void
    touched?: boolean
    error?: string
    name: string

}

const InputField: FC<InputFieldProps> = ({ onChangeText, placeholder, value, onBlur, name, error, touched }) => {
    console.log(value);

    return (
        <>
            <TextInput
                value={value}
                className='pl-0 pr-2 pt-2 pb-2 mb-4 text-[20px] border-b border-[#d4d4d4] font-robotoSans'
                placeholder={placeholder}
                onChangeText={onChangeText}
                onBlur={(e) => onBlur}
            />
            {touched && error && <Text className='text-danger mb-3 font-robotoSans'>{error}</Text>}
        </>

    )
}

export default InputField