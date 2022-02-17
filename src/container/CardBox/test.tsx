import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { CardBox } from './index'
import theme from '../../model/theme'

describe('Testing component CardBox', () => {
  test('should return the component with the default button on in', () => {
    const { getByText } = render(<BrowserRouter><ThemeProvider theme={theme}><CardBox img='' status='Empty' /></ThemeProvider></BrowserRouter>)
    expect(getByText('TAKE PICTURE')).toBeInTheDocument()
  })
  test('should return the component with the label Accepted', () => {
    const { getByText } = render(<BrowserRouter><ThemeProvider theme={theme}><CardBox img='base64...' status='Accepted' /></ThemeProvider></BrowserRouter>)
    expect(getByText('ACCEPTED')).toBeInTheDocument()
  })
  test('should return the component with Button to retake the photo and the label rejected', () => {
    const { getByText } = render(<BrowserRouter><ThemeProvider theme={theme}><CardBox img='base64...' status='Rejected' /></ThemeProvider></BrowserRouter>)
    expect(getByText('RETAKE PICTURE')).toBeInTheDocument()
    expect(getByText('REJECTED')).toBeInTheDocument()
  })
})
