import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { PhotoView } from './index'

describe('Testing component PhotoView Page', () => {
  test('should return the component with the default button on in', () => {
    const { getByText } = render(<BrowserRouter><PhotoView /></BrowserRouter>)
    expect(getByText('CANCEL')).toBeInTheDocument()
    expect(getByText('Room lighting is too low')).toBeInTheDocument()
  })
})
