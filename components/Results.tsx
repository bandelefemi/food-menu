import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { sampleResults } from './data';


const Results = () => {
  return (
    <View className="">
      <View className="flex-row items-center justify-between mb-5">
        <Text className="text-lg font-semibold">{sampleResults.length} results</Text>
        <Entypo name="cross" size={15} color="white" className="p-0.5 bg-neutral-300 rounded-full" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {sampleResults.slice(0, 8).map((item) => (
          <View key={item.id} className="relative flex-row items-center mb-6">
            <View className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <Image source={item.image} className="h-20 w-20 rounded-3xl" />
            </View>
            <View className="ml-10 flex-1 rounded-full bg-neutral-100 p-5 flex-row justify-between items-center">
              <View className="flex-1 ml-8">
                <Text className="text-sm font-semibold">{item.title}</Text>
                <Text className="text-xs mt-1 font-light">{item.price}</Text>
                <Text className="text-[11px] mt-1 font-light">Cooking time: {item.time}</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <Entypo name="minus" size={10} color="black" className="bg-yellow-200 rounded-full p-2" />
                <Text className="text-xs font-bold">01</Text>
                <Entypo name="plus" size={10} color="black" className="bg-white rounded-full p-2" />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Results