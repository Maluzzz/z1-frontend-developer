import { renderHook } from '@testing-library/react-hooks'

import { useCardID } from './useCardID'

describe('Testing in useCardID', () => {
  test('should return the initial state', async () => {
    const { result } = renderHook(() => useCardID())
    const { cardId } = result.current
    expect(cardId).toEqual({ status: 'Empty', img: '' })
  })
})
