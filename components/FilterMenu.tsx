import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { filterMenu } from './data'

const FilterMenu = () => {
  return (
    <View className=' p-5'>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            className='flex-row'
            >
            {filterMenu.map((item, index) => (
                <View key={index} className=' flex-row items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full mr-2'>
                    <Text className='text-center text-sm capitalize'>{item}</Text>
                </View>
            ))}
          </ScrollView>
        </View>
  )
}

export default FilterMenu