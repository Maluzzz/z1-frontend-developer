import { LinkProps } from 'react-router-dom'
import { DefaultTheme } from 'styled-components'

export type ButtonLinkProps = {
  text: string
  to: string
  secondary?: boolean | undefined
}

export type ButtonProps = LinkProps & {
  theme: DefaultTheme
  secondary?: boolean | undefined
}
