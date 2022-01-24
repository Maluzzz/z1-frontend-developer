/* eslint-disable no-undef */
import '@testing-library/jest-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import AppRoutes from './AppRoutes'

describe('Testing component AppRoutes', () => {
  test('should return the component with the correct ID ', () => {
    localStorage.setItem('photo', JSON.stringify({ img: 'base64...', status: 'Rejected' }))
    const { getByText } = render(<BrowserRouter><AppRoutes /></BrowserRouter>)
    expect(getByText('REJECTED')).toBeInTheDocument()
  })
})
