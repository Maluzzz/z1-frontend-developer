import React from 'react'
import { Button } from './styles'
import { ButtonLinkProps } from './types'

export const ButtonLink = ({ text, to, secondary = false }: ButtonLinkProps) => {
  return (
    <Button to={to} secondary={secondary.toString()}>
      {text.toUpperCase()}
    </Button>
  )
}


export default ButtonLink