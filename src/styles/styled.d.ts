import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secundary: string

      background: string
      li: string
      text: string
      inputColor: string
      inputPlaceholder: string
      borderTeacherItem: string
      avatarBackground: string
      name: string
      footer: string
      backgroundPages: string
      description: string
    }
  }
}
