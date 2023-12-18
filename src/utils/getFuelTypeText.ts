import {FuelType} from '../types/search'

export const getFuelTypeText = (fuelType: FuelType | null): string => {
    switch (fuelType) {
        case FuelType.Benzine:
            return 'Petrol'
        case FuelType.Elektrisch:
            return 'Electric'
        default:
            return 'No fuel type information'
    }
}
