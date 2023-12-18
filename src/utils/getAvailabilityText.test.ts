import {expect, it, describe} from '@jest/globals'
import {getAvailabilityText} from './getAvailabilityText'
import {Availability, AvailabilityStatus} from '../types/search'

describe('getAvailabilityText', () => {
    it('shows the correct status when available', () => {
        const availability: Availability | null = {
            status: AvailabilityStatus.Available,
            beginAvailable: '',
            endAvailable: '',
        }
        expect(getAvailabilityText(availability)).toBe('Available')
    })
    it('shows the correct status when not available', () => {
        const availability: Availability | null = {
            status: AvailabilityStatus.Unavailable,
            beginAvailable: '',
            endAvailable: '',
        }
        expect(getAvailabilityText(availability)).toBe('Not available')
    })
    it('shows he correct status when partially available', () => {
        const availability: Availability | null = {
            status: AvailabilityStatus.PartiallyAvailable,
            beginAvailable: '',
            endAvailable: '',
        }
        expect(getAvailabilityText(availability)).toBe('Partially available')
    })
    it('shows the correct status when there is no information', () => {
        const availability: Availability | null = null
        expect(getAvailabilityText(availability)).toBe(
            'No availability information',
        )
    })
})
