import { useState } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { catMenu } from './data'

const CatMenu = () => {
  const [selected, setSelected] = useState<string | null>("appetizers")

  return (
    <View className="px-5">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row"
      >
        {catMenu.map((item, index) => {
          const isActive = selected === item.name
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setSelected(item.name)}
              className={`flex-row items-center gap-2 px-4 py-3 mr-3 rounded-full ${
                isActive ? 'bg-black' : 'bg-neutral-100'
              }`}
            >
              <Image source={item.image} className="h-4 w-4" />
              <Text
                className={`text-sm capitalize ${
                  isActive ? 'text-white' : 'text-black'
                }`}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default CatMenu
