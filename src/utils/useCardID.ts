import { useState } from 'react'
import { cardId } from '../model/types'

function init() {
  return (
    JSON.parse(localStorage.getItem('photo') || 'null') || {
      status: 'Empty',
      img: '',
    }
  )
}

export const useCardID = () => {
  // eslint-disable-next-line no-shadow
  const [cardId, setCardId] = useState<cardId>(init)

  const saveCardId = (card: cardId) => {
    setCardId(card)
    localStorage.setItem('photo', JSON.stringify(card))
  }
  return { cardId, saveCardId }
}

export default useCardID
