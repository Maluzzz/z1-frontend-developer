import React, { useState } from 'react'
import { cardId } from '../model/types'


function init() {
 return  (JSON.parse(localStorage.getItem('photo') || 'null')) ||  { status: 'Empty', img: '' }
}

export const useCardID = () => {
  const [cardId] = useState<cardId>(init)

  const saveCardId = (card : cardId) => {
    localStorage.setItem('photo', JSON.stringify(card))
  } 

  return { cardId, saveCardId }
}
