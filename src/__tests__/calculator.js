import React from 'react'
import * as jestDOM from '@testing-library/jest-dom' // Testing library is already using this library, but ill use it as an example anyway
// import * as jestDOM from '@testing-library/jest-dom/extend-expect' can be used instead of the import above, so we don't need the extend.expect boilerplate 

import { fireEvent, render, screen } from 'calculator-jest-utils'
import Calculator from '../calculator'

expect.extend(jestDOM) // Now we can use more assertions

test('the clear button switches from AC to C when there is an entry', () => {
  render(<Calculator />)
  const clearButton = screen.getByText('AC')

  fireEvent.click(screen.getByText(/3/))
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC') // toHaveTextContent from jestDOM
})
