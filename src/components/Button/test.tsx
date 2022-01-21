/* eslint-disable no-undef */
import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import { ButtonLink } from './index'

describe('Testing component ButtonLink', () => {
  const to = '/fake-path'
  const secondary = true
  const text = 'text'

  beforeEach(() => {
    render(
      <BrowserRouter>
        <ButtonLink secondary={secondary} to={to} text={text} />
      </BrowserRouter>,
    )
  })

  test('should return the component with the upercase text on in', () => {
    expect(screen.getByText(text.toUpperCase())).toBeInTheDocument()
  })
  test('should return the component with the href link', () => {
    const linkElement = screen.getByText(text.toUpperCase())
    const path = linkElement.getAttribute('href')
    expect(linkElement).toBeInTheDocument()
    expect(path).toBe(to)
  })
})
