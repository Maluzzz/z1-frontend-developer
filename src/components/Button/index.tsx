import React from 'react'
import { useTheme } from 'styled-components'
import { Button } from './styles'
import { ButtonLinkProps } from './types'

export function ButtonLink({
  text,
  to,
  secondary = false,
}: ButtonLinkProps) {
  const theme = useTheme()
  return (
    <Button to={to} secondary={secondary} theme={theme}>
      {text.toUpperCase()}
    </Button>
  )
}

export default ButtonLink
