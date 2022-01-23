/* eslint-disable no-undef */
/**
 * Shouldn't send too much request to the
 * prodcution server we should have a local env
 */
import '@testing-library/jest-dom'
import fetchApi from './fetcher'

describe('Testing fetchApi function', () => {
  test('should get string from outcome', async () => {
    const result = await fetchApi('img')
    expect(typeof result.summary.outcome).toBe('string')
  })
})
