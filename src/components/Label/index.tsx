import React from 'react'

import closeIcon from '../../assets/close.svg'
import tickIcon from '../../assets/tick.svg'
import LabelBox from './styles'
import * as theme from '../../model/theme'

const getLabelByType = (text: string) => ({
  success: (
    <LabelBox color={theme.SUCCESS}>
      <img src={tickIcon} alt='icon' />
      {text}
    </LabelBox>
  ),
  danger: (
    <LabelBox color={theme.ERROR}>
      <img src={closeIcon} alt='icon' />
      {text}
    </LabelBox>
  ),
})

export function Label({ type, text }: { type: string; text?: string }) {
  return <div>{getLabelByType(text)[type]}</div>
}

export default Label
