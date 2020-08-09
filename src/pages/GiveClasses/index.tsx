import React from 'react'

import { ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Container, Title, Description, OkButton, OkButtonText } from './styles'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation()

  function handleNavigateBack() {
    goBack()
  }

  return (
    <Container>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web
        </Description>
      </ImageBackground>

      <OkButton onPress={handleNavigateBack}>
        <OkButtonText>Tudo bem</OkButtonText>
      </OkButton>
    </Container>
  )
}

export default GiveClasses
