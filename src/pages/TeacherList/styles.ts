import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundPages};
`

export const ScrollViewTeacherList = styled.ScrollView`
  margin-top: -40px;
`

export const SearchForm = styled.View`
  margin-bottom: 24px;
`

export const Label = styled.Text`
  color: ${props => props.theme.colors.description};
  font-family: 'Poppins_400Regular';
`

export const Input = styled.TextInput`
  height: 54px;
  background-color: ${props => props.theme.colors.li};
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px 0 16px;
  margin-top: 4px;
  margin-bottom: 16px;
  color: ${props => props.theme.colors.text};
`

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const InputBlock = styled.View`
  width: 48%;
`

export const SubmitButton = styled(RectButton)`
  background-color: #04d361;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  margin-left: 16px;
`
