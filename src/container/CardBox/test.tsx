import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { CardBox } from './index'

describe('Testing component CardBox', () => {
  test('should return the component with the default button on in', () => {
    const { getByText } = render(<BrowserRouter><CardBox img='' status='Empty' /></BrowserRouter>)
    expect(getByText('TAKE PICTURE')).toBeInTheDocument()
  })
  test('should return the component with the label Accepted', () => {
    const { getByText } = render(<BrowserRouter><CardBox img='base64...' status='Accepted' /></BrowserRouter>)
    expect(getByText('ACCEPTED')).toBeInTheDocument()
  })
  test('should return the component with Button to retake the photo and the label rejected', () => {
    const { getByText } = render(<BrowserRouter><CardBox img='base64...' status='Rejected' /></BrowserRouter>)
    expect(getByText('RETAKE PICTURE')).toBeInTheDocument()
    expect(getByText('REJECTED')).toBeInTheDocument()
  })
})
