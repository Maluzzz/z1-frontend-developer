import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../model/theme'

import { Header } from './index'

describe('Testing component Header', () => {
  test('should return the component with the text on in', () => {
    const text = 'text'
    const { getByText } = render(<ThemeProvider theme={theme}><Header logo={text} /></ThemeProvider>)
    expect(getByText(text)).toBeInTheDocument()
  })
})
