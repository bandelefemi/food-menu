import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Search = () => {
  return (
    <View className="flex-row items-center bg-neutral-100 rounded-full h-14 px-4 gap-5">
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
            className="flex-1 text-base  placeholder:text-gray-500"
            placeholder="Search"
            placeholderTextColor="gray"
            underlineColorAndroid="transparent"
        />
    </View>
  )
}

export default Search