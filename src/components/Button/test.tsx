import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { ButtonLink } from './index'
import { BrowserRouter } from 'react-router-dom'

describe("Testing component ButtonLink", () => {
      test("should return the component with the upercase text on in", () => {
            const to = '/fake-path'
            const secondary = true
            const text = 'text'
            const { getByText } = render(<BrowserRouter>
                  <ButtonLink secondary={secondary} to={to} text='text' />
            </BrowserRouter>)
            expect(getByText(text.toUpperCase())).toBeInTheDocument()
      })
})