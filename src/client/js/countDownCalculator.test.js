/**
 * @jest-environment jsdom
 */
import { countDownCalculator } from './countDownCalculator.js' 

test('properly calculates and sets countdown timer', () => {
    expect(countDownCalculator())
}) 