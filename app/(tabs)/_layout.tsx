import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
/* import { MaterialCommunityIcons } from '@expo/vector-icons' */
/* import { FontAwesome5 } from '@expo/vector-icons' */
import { Ionicons } from '@expo/vector-icons'

const Layout = () => {
  return (
    <Tabs 
    screenOptions={{
      tabBarActiveTintColor: Colors.primary,
      tabBarLabelStyle: { 
        fontFamily: 'Cereal-bold',
      }
      }}>
        <Tabs.Screen 
        name="index"
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon : ({ color, size }) => <Ionicons name="search" size={size} color={color} />
        }} />

    </Tabs>
  )
}

export default Layout