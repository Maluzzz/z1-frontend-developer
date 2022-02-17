import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        success: string,
        error: string,
        primary: string,
      },
  }
}
