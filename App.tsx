import { StatusBar } from 'expo-status-bar'
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'

import blurImage from './src/assets/luz.png'
import Stripes from './src/assets/stripe.svg'
import Logo from './src/assets/spacetimeLogo.svg'
import { styled } from 'nativewind'

const StyledStripe = styled(Stripes)

export default function App() {
  const [hashLoadedFonts] = useFonts({
    BaiJamjuree_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  })
  if (!hashLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurImage}
      className="bg-gray-900 flex-1  items-center relative :"
      imageStyle={{
        left: '-105%',
        position: 'absolute',
      }}
    >
      <StyledStripe className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <Logo />

        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-gray-100 text-center font-body text-base ml-3 mr-3 leading-relaxed">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-purple-800 px-5 py-2"
        >
          <Text className="font-alt text-sm uppercase text-zinc-100">
            CADASTRAR LEMBRANÇA
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </ImageBackground>
  )
}
