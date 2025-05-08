import { View, Text, StatusBar, Image, Platform } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';

const Header = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <View 
        style={{
          marginTop: Platform.OS === 'ios'? 30 : 0,
        }} 
        className=' h-20 p-5 flex-row items-end '
      >
        <View className=' flex-row w-full justify-between items-center'>
          <Link href={'/'}>
            <Feather name="chevron-left" size={20} color="black" className='' />
          </Link>

          <View className=' relative'>
            <Image source={require('@/assets/images/notification.png')} />
            <Text className=' absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-full text-center text-white text-xs font-bold'>
              2
            </Text>
          </View>
          
        </View>
      </View>
    </View>
  )
}

export default Header