import React, { FC } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import moment from 'moment';
import { Linking } from 'react-native';

export interface NewsCardProps {
    "category": string
    "datetime": number
    "headline": string
    "id": number
    "image": string
    "related": string
    "source": string
    "summary": string
    "url": string
}
const NewsCard: FC<NewsCardProps> = (item) => {

    const formatDate = (timestamp: number) => {

        return moment.unix(timestamp).format("MMMM D, YYYY");
    }
    const handlePress = () => {
        Linking.openURL(item.url);

    }
    return (
        <TouchableOpacity onPress={handlePress}>
            <View className={`flex-row p-4`}>
                <Image
                    source={{ uri: item.image }}
                    className={`w-[100px] h-[100px]`}
                    resizeMode="cover"
                    loadingIndicatorSource={require('./../../../assets/images/imagePlaceholder.png')}
                />
                <View className={`flex-1 ml-4`}>
                    <View className='flex-row justify-between mb-2'>
                        <Text className={`text-[#FFFFFFB2] text-[12px] font-robotoSans font-400`}>{item.source}</Text>
                        <Text className={`text-[12px] text-[#FFFFFFB2] font-robotoSans font-400`}>{formatDate(item.datetime)}</Text>
                    </View>
                    <Text className={`text-[20px] text-[##FFFFFF] font-500 font-robotoSans line-clamp-3`}>
                        {item.headline}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default NewsCard