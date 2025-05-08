import React, { useRef, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

const Tab = () => {
  const [activeTab, setActiveTab] = useState<'food' | 'drink'>('food')
  const slideAnim = useRef(new Animated.Value(0)).current

  const handleTabPress = (tab: 'food' | 'drink') => {
    setActiveTab(tab)
    Animated.spring(slideAnim, {
      toValue: tab === 'food' ? 0 : SCREEN_WIDTH / 2,
      useNativeDriver: true,
    }).start()
  }

  return (
    <View className="relative w-full bg-purple-800/15 rounded-full h-14 flex-row items-center">
      
      {/* Sliding background */}
      <Animated.View
        style={{
          transform: [{ translateX: slideAnim }],
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '45%',
          borderRadius: 9999,
          backgroundColor: 'black',
        }}
      >
        {/* <View className="flex-1 justify-center px-4">
          {activeTab === 'food' ? (
            <View className="flex-row items-center gap-2">
              <Image source={require('@/assets/images/food.png')} className="h-6 w-6" />
              <Text className="text-white">Food Menu</Text>
            </View>
          ) : (
            <View className="flex-row items-center gap-2">
              <Image source={require('@/assets/images/drinks.png')} className="h-6 w-6" />
              <Text className="text-white">Drink Menu</Text>
            </View>
          )}
        </View> */}
      </Animated.View>

      {/* Touchable Tabs */}
      <TouchableOpacity
        className="flex-1 items-center justify-center z-10"
        onPress={() => handleTabPress('food')}
      >
        <View className="flex-row items-center gap-2">
          <Image source={require('@/assets/images/food.png')} className="h-6 w-6" />
          <Text className={`${activeTab === 'food' ? 'text-white' : 'text-black'}`}>
            Food Menu
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-1 items-center justify-center z-10"
        onPress={() => handleTabPress('drink')}
      >
        <View className="flex-row items-center gap-2">
          <Image source={require('@/assets/images/drinks.png')} className="h-6 w-6" />
          <Text className={`${activeTab === 'drink' ? 'text-white' : 'text-black'}`}>
            Drink Menu
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Tab
