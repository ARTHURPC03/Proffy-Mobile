/* eslint-disable react/style-prop-object */
/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { AppLoading } from 'expo'
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo'
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'

import { ThemeProvider } from 'styled-components'

import ThemeSwitcher from './src/components/ThemeSwitcher'

import light from './src/styles/themes/light'
import dark from './src/styles/themes/dark'

import AppStack from './src/routes/AppStack'

export default function App() {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = (): void => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <AppStack />
      <StatusBar style="light" />
      <ThemeSwitcher toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}
