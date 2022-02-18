import React from 'react'

import { useTheme } from 'styled-components'
import closeIcon from '../../assets/close.svg'
import tickIcon from '../../assets/tick.svg'
import LabelBox from './styles'

/**
 * In the future you could add more types of labels by types
 * Even add props icon to add customs icons
 *
 */
export const Label = ({ type, text }: { type: string; text: string }) => {
  const { colors } = useTheme()
  return (
    <div>
      {{
        success: (
          <LabelBox color={colors.success}>
            <img src={tickIcon} alt='icon' />
            {text}
          </LabelBox>
        ),
        danger: (
          <LabelBox color={colors.error}>
            <img src={closeIcon} alt='icon' />
            {text}
          </LabelBox>
        ),
      }[type]}
    </div>
  )
}

export default Label
