import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { HomeView } from './index'

describe('Testing component HomeView Page', () => {
  test('should return the component with the default button on in', () => {
    const { getByText } = render(<BrowserRouter><HomeView /></BrowserRouter>)
    expect(getByText('TAKE PICTURE')).toBeInTheDocument()
  })
  test('should return the component with the Label accepted on in', () => {
    localStorage.setItem('photo', JSON.stringify({ img: 'base64...', status: 'Accepted' }))
    const { getByText } = render(<BrowserRouter><HomeView /></BrowserRouter>)
    expect(getByText('ACCEPTED')).toBeInTheDocument()
  })
  test('should return the component with the default button on in', () => {
    localStorage.setItem('photo', JSON.stringify({ img: 'base64...', status: 'Rejected' }))
    const { getByText } = render(<BrowserRouter><HomeView /></BrowserRouter>)
    expect(getByText('REJECTED')).toBeInTheDocument()
  })
})
