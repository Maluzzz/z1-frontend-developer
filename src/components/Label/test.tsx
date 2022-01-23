/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Label } from './index'

describe('Testing component Label', () => {
  test('should return the component without crashing', () => {
    render(<Label type='danger' text='Accepted' />)
    const label = screen.getByAltText('icon')
    const path = label.getAttribute('src')
    expect(screen.getByText('Accepted')).toBeInTheDocument()
    expect(path).toContain('SvgrURL')
  })
  test('should return the component empty component', () => {
    render(<Label type='no-exist' text='Accepted' />)
    // TO.DO
  })
})
