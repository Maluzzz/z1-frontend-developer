/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { Label } from './index'
import theme from '../../model/theme'

describe('Testing component Label', () => {
  test('should return the component without crashing', () => {
    render(<ThemeProvider theme={theme}><Label type='danger' text='Accepted' /></ThemeProvider>)
    const label = screen.getByAltText('icon')
    const path = label.getAttribute('src')
    expect(screen.getByText('Accepted')).toBeInTheDocument()
    expect(path).toContain('SvgrURL')
  })
  test('should return the component empty', () => {
    render(<ThemeProvider theme={theme}><Label type='no-exist' text='Accepted' /></ThemeProvider>)
    // TO.DO
  })
})
