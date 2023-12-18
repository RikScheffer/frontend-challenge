import {expect, it, describe} from '@jest/globals'
import {FuelType} from '../types/search'
import {getFuelTypeText} from './getFuelTypeText'

describe('getFuelTypeText', () => {
    it('shows the correct fuel type when petrol', () => {
        expect(getFuelTypeText(FuelType.Benzine)).toBe('Petrol')
    })
    it('shows the correct fuel type when electric', () => {
        expect(getFuelTypeText(FuelType.Elektrisch)).toBe('Electric')
    })
    it('shows the correct fuel type when there is no information', () => {
        expect(getFuelTypeText(null)).toBe('No fuel type information')
    })
})
