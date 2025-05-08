import { View, Text, ScrollView, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { riceMenu } from './data'
import { BlurView } from 'expo-blur'
import Entypo from '@expo/vector-icons/Entypo';

const TopMenu = () => {
  return (
    <View className="">
      <Text className="text-lg font-semibold mb-3">Top Rice Menu</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row"
      >
        {riceMenu.map((item, index) => (
          <ImageBackground
            key={index}
            source={item.image}
            className="w-40 h-56 mr-4 rounded-3xl overflow-hidden"
            imageStyle={{ borderRadius: 24 }}
          >
            <View className="flex-1 justify-end">
              <BlurView tint='light' intensity={90} className="h-20  rounded-b-3xl p-3 flex-row justify-between items-center">
                <View className="w-2/3">
                  <Text className="text-sm text-black" numberOfLines={2}>
                    {item.title}
                  </Text>
                  <Text className="text-xs mt-1 font-light text-black">₦{item.price}</Text>
                </View>

                <Pressable className="bg-white p-3.5 rounded-full">
                  <Entypo name="plus" size={14} color="black" />
                </Pressable>
              </BlurView>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>
  )
}

export default TopMenu