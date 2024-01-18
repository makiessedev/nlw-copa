import { View, StatusBar } from 'react-native';
import { PaperProvider, ActivityIndicator, Text } from 'react-native-paper';
import { useFonts, Roboto_700Bold, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { SignIn } from './src/components/SignIn';

export default function App() {
  const [ fontsLoaded ] = useFonts({Roboto_700Bold, Roboto_400Regular, Roboto_500Medium})

  return (
    <PaperProvider>
      <View className='bg-gray-900 flex-1 justify-center items-center'>
        { fontsLoaded ? <SignIn /> : <ActivityIndicator /> }
        <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'}/>
      </View>
    </PaperProvider>
  );
}
