import { fetchUser } from '@/store/slices/UserSlice'
import { RootState } from '@/store/store'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import api from '@/config/axios-config'
import NewsCard, { NewsCardProps } from '@/components/shared/newsCard/NewsCard'

const secret = process.env.EXPO_PUBLIC_API_SECRET || "";

const dashboard = () => {
    const user = useSelector((state: RootState) => state.user);
    const [news, setNews] = useState<NewsCardProps[]>([])
    const [isError, setIsError] = useState(false);

    // Fetch news from the API
    const fetchNews = async () => {
        try {
            const response = await api.get('/news', { params: { category: 'general', token: secret } })
            setNews(response.data);
            setIsError(false)
        } catch (error) {
            // Show Error when there is a api fetch error
            setIsError(true)

        }

    }
    useEffect(() => {
        fetchNews()
    }, [])


    return (
        <View className='bg-[#05021B]'>

            <SafeAreaView className="bg-light h-full box-border">
                <View className='mt-2 mb-2 p-4 min-h-[100px]'>
                    <Text className='text-white font-900 font-RalewaySans text-[32px]'>Hey {user?.firstName || ''}</Text>
                    {
                        isError && <Text className='text-[#ffff] font-500 font-RubikSans text-[16px] mt-[36px]'>Something went wrong. Please try again later.</Text>
                    }
                </View>
                <View className='bg-black w-full h-full ]'>
                    <FlatList
                        data={news}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <NewsCard {...item} />
                        )}
                    />
                </View>
            </SafeAreaView>
        </View>


    )
}

export default dashboard