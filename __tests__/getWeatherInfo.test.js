import { getWeatherInfo } from "../src/client/js/getWeatherInfo"

describe('Tests function viability', () => {
    test('Test getWeatherInfo function is defined', () => {
        expect(getWeatherInfo).toBeDefined()
    })
})