/* eslint-disable no-undef */
import '@testing-library/jest-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import CaptureBox from './index'

/**
 * TO.DO: mock video stream
 */

const mockGetUserMedia = jest.fn(async () => new Promise<void>((resolve) => {
  resolve()
}))

Object.defineProperty(global.navigator, 'mediaDevices', {
  value: {
    getUserMedia: mockGetUserMedia,
  },
})

// describe('Testing component CaptureBox', () => {
//   test('should return the component ', () => {
//     render(<BrowserRouter><CaptureBox /></BrowserRouter>)
//   })
// })
