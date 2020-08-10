/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Feather } from '@expo/vector-icons'
import { Container, Button } from './styles'

interface Props {
  toggleTheme(): void
}

const ThemeSwitcher: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext)

  return (
    <Container>
      <Button onPress={toggleTheme}>
        <Feather
          name={title === 'light' ? 'sun' : 'moon'}
          size={30}
          color="#e83f5b"
        />
      </Button>
    </Container>
  )
}

export default ThemeSwitcher
