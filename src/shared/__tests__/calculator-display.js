import React from 'react'
import {render} from '@testing-library/react'
import CalculatorDisplay from '../calculator-display'

// jest-emotion (Snapshot serializer)

test('renders', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container.firstChild).toMatchInlineSnapshot(`
<div
  class="css-12149uf"
>
  <div
    class="autoScalingText"
    style="transform: scale(1,1);"
  >
    0
  </div>
</div>
`)
})
