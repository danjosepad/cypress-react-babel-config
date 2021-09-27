import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Calculator from '../calculator'

test('the clear button switches from AC to C when there is an entry', () => {
  render(<Calculator />)
  const clearButton = screen.getByText('AC')

  fireEvent.click(screen.getByText(/3/))
  expect(clearButton.textContent).toBe('C')

  fireEvent.click(clearButton)
  expect(clearButton.textContent).toBe('AC')
})
