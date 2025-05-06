import { View, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Tab from './Tab'
import Search from './Search'
import CatMenu from './CatMenu'
import FilterMenu from './FilterMenu'
import TopMenu from './TopMenu'
import Results from './Results'

const HomeScreen = () => {
  return (
    <View className='bg-white' style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <Header />
      <View className=' px-5'>
        <Tab />
      </View>
      <View className='p-5'>
        <Search />
      </View>
      <View>
        <CatMenu />
      </View>
      <View>
        <FilterMenu />
      </View>
      <ScrollView className='flex-1 px-5'>
        <View>
            <TopMenu />
        </View>
        <View className=' mt-5'>
            <Results />
        </View>
      </ScrollView>
      
    </View>
  )
}

export default HomeScreen