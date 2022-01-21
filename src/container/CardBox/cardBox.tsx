import React from 'react'

import { ButtonLink } from '../../components/Button'
import { Label } from '../../components/Label'
import { cardId } from '../../model/types'
import { CardContainer, LabelContainer } from './styles'

const types = {
  Accepted: 'success',
  Rejected: 'danger',
  Empty: 'none',
}

export const CardBox = ({ status, img }: cardId) => {
  const valid = status === 'Accepted'
  const buttonText = img === '' ? 'Take Picture' : 'Retake Picture'

  return (
    <div>
      <CardContainer valid={valid} img={img}>
        {!valid && <ButtonLink to='/take-photo' text={buttonText} />}
      </CardContainer>
      <LabelContainer>
        <Label type={types[status]} text={status.toUpperCase()} />
      </LabelContainer>
    </div>
  )
}

export default CardBox
