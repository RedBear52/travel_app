import { getCountryInfo } from "../src/client/js/getCountryInfo"

describe('Tests function viability', () => {
    test('Test getCountryInfo function is defined', () => {
        expect(getCountryInfo).toBeDefined()
    })
})