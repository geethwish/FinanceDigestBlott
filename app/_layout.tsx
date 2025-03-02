import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Provider } from "react-redux";

import { useColorScheme } from '@/components/useColorScheme';
import { store } from '@/store/store';
import { View } from '@/components/Themed';
import tw from "twrnc";
import './../global.css'
import CustomSplashScreen from '@/components/splashScreen/CustomSplashScreen';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const [loaded, error] = useFonts({
    roboto: require('../assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
    ...FontAwesome.font,
  });
  const [isReady, setIsReady] = useState(false);
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    setTimeout(async () => {
      setIsReady(true);
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);

  if (!isReady && !loaded) {
    return (
      <View style={tw`flex-1 bg-black justify-center items-center`}>
        <CustomSplashScreen width={120} height={120} />
      </View>
    );
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();


  return (
    <Provider store={store}>

      <Stack>
        <Stack.Screen name="index" redirect />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>

    </Provider>

  );
}

