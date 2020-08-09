/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React from 'react'
import { Image } from 'react-native'

import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonsContainer,
  ButtonText,
  ButtonPrimary,
  ButtonSecondary,
  TotalConnections,
} from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

const Landing: React.FC = () => {
  return (
    <Container>
      <Banner source={landingImg} />

      <Title>
        Seja bem-vindo,
        {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <ButtonPrimary>
          <Image source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </ButtonPrimary>

        <ButtonSecondary>
          <Image source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </ButtonSecondary>
      </ButtonsContainer>

      <TotalConnections>
        Total de 285 conexões já realizadas <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  )
}

export default Landing
