import React from 'react'
import { render } from '@testing-library/react'
import AutoScalingtext from '../auto-scaling-text'

test('renders', () => {
  const { debug } = render(<AutoScalingtext />)
  debug()
})