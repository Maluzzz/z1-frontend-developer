import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { Header } from './index'

describe('Testing component Header', () => {
  test('should return the component with the text on in', () => {
    const text = 'text'
    const { getByText } = render(<Header logo={text} />)
    expect(getByText(text)).toBeInTheDocument()
  })
})
