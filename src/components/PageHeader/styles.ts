import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 40px;
  background-color: ${props => props.theme.colors.background};
`

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  margin: 40px 0px 40px 0px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
