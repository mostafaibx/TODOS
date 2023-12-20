import { it, describe, expect, vi } from 'vitest'
import { setup } from '@nuxt/test-utils'
import useClock from '../utils/clock'

await setup({
  server: false,
  browser: true
})

describe('useClock', () => {
  it('updates the clock state every second', () => {
    const { state, startClock, stopClock } = useClock()

    startClock()

    expect(state.hours).toBeGreaterThan(0)
    expect(state.minutes).toBeGreaterThan(0)
    expect(state.seconds).toBeGreaterThan(0)

    stopClock()
  })

  it('stops updating the clock state when stopped', () => {
    const { state, startClock, stopClock } = useClock()

    // Start the clock
    startClock()

    // Move the timer forward by 1 second
    vi.advanceTimersByTime(1000)

    // Save the current state
    const currentState = { ...state }

    // Stop the clock
    stopClock()

    // Move the timer forward by another second
    vi.advanceTimersByTime(1000)

    // Check if the state remains the same after stopping the clock
    expect(state).toEqual(currentState)
  })
})
