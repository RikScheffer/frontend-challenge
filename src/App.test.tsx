import {render, screen} from '@testing-library/react'
import {App} from './App'
import {expect, it, jest} from '@jest/globals'
import {useApi} from './hooks/useApi'
import {
    AvailabilityStatus,
    FuelType,
    Locktype,
    ParkingType,
    ResourceType,
    SearchResultItem,
} from './types/search'

jest.mock('./hooks/useApi')
const mockedUseApi = jest.mocked(useApi)

const sampleResource: SearchResultItem = {
    resource: {
        id: 13,
        registrationPlate: 'VW-EG-88',
        alias: 'Elektrische-VW-eGolf',
        resourceType: ResourceType.Car,
        brand: 'Volkswagen',
        model: 'Golf',
        color: null,
        fuelType: FuelType.Elektrisch,
        numberOfSeats: 4,
        location: 'Galjoenstraat',
        streetNumber: null,
        latitude: 52.090793,
        longitude: 5.111107,
        advertisement: null,
        created: '2023-12-11 15:23',
        city: 'Utrecht',
        locktype: Locktype.Meeting,
        parkingType: ParkingType.Default,
        fuelLevel: 15,
        fuelRange: 90,
        charging: false,
        chargeAdapterConnected: null,
        fuelRangeDefault: 0,
        chargeAdapterConnectedSince: null,
        price: {
            id: 13,
            hourRate: '3.25',
            kilometerRate: '0.30',
            fuelPerKilometer: '0.13',
            dayRateTotal: '32.50',
        },
        options: {
            id: 13,
            automatic: false,
            winterTires: false,
            towbar: false,
        },
        locktypes: [Locktype.Meeting],
        favorite: false,
        rating_totals: null,
    },
    availability: {
        status: AvailabilityStatus.Available,
        beginAvailable: '',
        endAvailable: '',
    },
    shouldDischarge: false,
    distance: null,
}

it("shows that it's loading", () => {
    mockedUseApi.mockReturnValue({
        isLoading: true,
        data: undefined,
        error: undefined,
    })

    render(<App />)
    const element = screen.getByText(/Loading.../i)
    expect(element).toBeInTheDocument()
})
it('shows that it has an error', () => {
    mockedUseApi.mockReturnValue({
        isLoading: false,
        data: undefined,
        error: 'some error',
    })

    render(<App />)
    const element = screen.getByText(/Something went wrong, please try again/i)
    expect(element).toBeInTheDocument()
})
it('shows the number of results', () => {
    mockedUseApi.mockReturnValue({
        isLoading: false,
        data: {
            result: {
                results: [sampleResource],
                total: 1,
                current: 1,
                offset: 0,
                limit: 1,
            },
            jsonrpc: '2.0',
            authenticated: false,
            id: 0,
        },
        error: undefined,
    })

    render(<App />)
    const element = screen.getByText(/1 result/i)
    expect(element).toBeInTheDocument()
})
