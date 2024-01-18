import { View } from "react-native";
import { Icon, Text } from "react-native-paper";
import colors from 'tailwindcss/colors'

import Logo from '../assets/logo.svg';

export function SignIn () {
  return (
    <View className='bg-gray-900 flex-1 justify-center items-center'>
      <Logo />
    </View>
  )
} 