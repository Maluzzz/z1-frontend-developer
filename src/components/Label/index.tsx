import React from 'react'

import closeIcon from '../../assets/close.svg'
import tickIcon from '../../assets/tick.svg'
import LabelBox from './styles'
import * as theme from '../../model/theme'
/**
 * In the future you could add more types of labels by types
 * Even add props icon to add customs icons
 *
 */
export const Label = ({ type, text }: { type: string; text: string }) => (
  <div>
    {{
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
    }[type]}
  </div>
)

export default Label
