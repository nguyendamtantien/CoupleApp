import * as React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaleScreen from './MaleScreen'
import FamaleScreen from './FemaleScreen'

const Tab = createBottomTabNavigator()
const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Gấu Đực"
        options={{ tabBarIcon: () => <Text>🧑</Text> }}
        component={MaleScreen}
      />
      <Tab.Screen
        name="Gấu Cái"
        options={{ tabBarIcon: () => <Text>👩</Text> }}
        component={FamaleScreen}
      />
    </Tab.Navigator>
  )
}

export default HomeScreen
