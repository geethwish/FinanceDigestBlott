import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Provider, useSelector } from "react-redux";
import Toast from 'react-native-toast-message';

import { RootState, store } from '@/store/store';
import { View } from '@/components/Themed';
import tw from "twrnc";
import './../global.css'
import CustomSplashScreen from '@/components/splashScreen/CustomSplashScreen';

SplashScreen.preventAutoHideAsync();


function AppContent() {
  const user = useSelector((state: RootState) => state.user);
  const [loaded, error] = useFonts({
    robotoSans: require('../assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
    RalewaySans: require('../assets/fonts/Raleway-VariableFont_wght.ttf'),
    RubikSans: require('../assets/fonts/Rubik-VariableFont_wght.ttf'),
    ...FontAwesome.font,
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    setTimeout(async () => {
      setIsReady(true);
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);

  if (!isReady || !loaded) {
    return (
      <View style={tw`flex-1 bg-black justify-center items-center`}>
        <CustomSplashScreen width={120} height={120} />
      </View>
    );
  }

  return <Provider store={store}>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" redirect options={{ headerShown: false }} />
      {
        user?.firstName !== undefined && user?.firstName !== null && user?.firstName !== '' ?
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
          : <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      }
    </Stack>
    <Toast />
  </Provider>
}


export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}


