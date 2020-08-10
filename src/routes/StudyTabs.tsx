import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import TeacherList from '../pages/TeacherList'
import Favorites from '../pages/Favorites'

const { Navigator, Screen } = createBottomTabNavigator()

interface IconProps {
  color: string
  size: number
  focused: boolean
}

function StudyTabs() {
  const { title } = useContext(ThemeContext)
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: title === 'light' ? '#fafafc' : '#101010',
        activeBackgroundColor: title === 'light' ? '#ebebf5' : '#0d0d0d',
        inactiveTintColor: title === 'light' ? '#32264d' : '#fafafc',
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }: IconProps) => {
            return (
              <Ionicons
                name="ios-easel"
                size={size}
                color={focused ? '#8257e5' : color}
              />
            )
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }: IconProps) => {
            return (
              <Ionicons
                name="ios-heart"
                size={size}
                color={focused ? '#8257e5' : color}
              />
            )
          },
        }}
      />
    </Navigator>
  )
}

export default StudyTabs
