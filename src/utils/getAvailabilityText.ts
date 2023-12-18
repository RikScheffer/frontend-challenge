import {Availability, AvailabilityStatus} from '../types/search'

export const getAvailabilityText = (
    availability: Availability | null,
): string => {
    switch (availability?.status) {
        case AvailabilityStatus.Available:
            return 'Available'
        case AvailabilityStatus.Unavailable:
            return 'Not available'
        case AvailabilityStatus.PartiallyAvailable:
            return 'Partially available'
        default:
            return 'No availability information'
    }
}
