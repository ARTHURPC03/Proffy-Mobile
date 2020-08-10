import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  background-color: ${props => props.theme.colors.li};
  border-width: 1px;
  border-color: ${props => props.theme.colors.borderTeacherItem};
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${props => props.theme.colors.avatarBackground};
`

export const ProfileInfo = styled.View`
  margin-left: 16px;
`

export const Name = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${props => props.theme.colors.name};
  font-size: 12px;
  margin-top: 4px;
`

export const Subject = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${props => props.theme.colors.text};
  font-size: 12px;
  margin-top: 4px;
`

export const Bio = styled.Text`
  margin: 0 24px 0 24px;
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors.text};
`
export const Footer = styled.View`
  background-color: ${props => props.theme.colors.footer};
  padding: 24px;
  align-items: center;
  margin-top: 24px;
`

export const Price = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${props => props.theme.colors.text};
  font-size: 16px;
`

export const PriceValue = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #8257e5;
  font-size: 16px;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`

export const FavoriteButton = styled(RectButton)`
  background-color: #8257e5;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`

export const ContactButton = styled(RectButton)`
  background-color: #04d361;
  flex: 1;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`

export const ContactButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  margin-left: 16px;
`
