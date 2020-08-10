/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { Image } from 'react-native'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  ContactButton,
  ContactButtonText,
} from './styles'

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: 'https://github.com/arthurpc03.png' }} />

        <ProfileInfo>
          <Name>ARTHUR PC</Name>
          <Subject>Matemática</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        I'm a Full Stack Developer Passionate about the best web and mobile
        development technologies.
        {'\n'}
        {'\n'}
        I'm a student at Bootcamp Gostack at
        Rocketseat, where I learned in practice on the most modern technologies
        of web and mobile development.
      </Bio>

      <Footer>
        <Price>
          Preço/hora
          {'   '}
          <PriceValue>R$ 20,00</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton style={{ backgroundColor: '#e33d3d' }}>
            {/* <HeartFavoriteIcon source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </FavoriteButton>

          <ContactButton>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>

        </ButtonsContainer>
      </Footer>
    </Container>
  )
}

export default TeacherItem
