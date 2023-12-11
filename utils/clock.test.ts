import { expect, test } from 'vitest'
import useClock from './clock'

test('adds 1 + 2 to equal 3', () => {
  expect(useClock()).toBe({
    hours: 1,
    minutes: 2,
    seconds: 0
  })
})
