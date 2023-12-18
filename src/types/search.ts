export type SearchResultItem = {
    resource: Resource
    availability: Availability | null
    shouldDischarge: boolean
    distance: null
}

export type Availability = {
    status: AvailabilityStatus
    beginAvailable: string
    endAvailable: string
}

export enum AvailabilityStatus {
    Available = 'available',
    PartiallyAvailable = 'partially_available',
    Unavailable = 'unavailable',
}

export type Resource = {
    id: number
    registrationPlate: string
    alias: string
    resourceType: ResourceType
    brand: null | string
    model: null | string
    color: null | string
    fuelType: FuelType | null
    numberOfSeats: number
    location: null | string
    streetNumber: null | string
    latitude: number
    longitude: number
    advertisement: null
    created: string
    city: string | null
    locktype: Locktype
    parkingType: ParkingType
    fuelLevel: number | null
    fuelRange: number | null
    charging: boolean
    chargeAdapterConnected: boolean | null
    fuelRangeDefault: number
    chargeAdapterConnectedSince: null | string
    price: Price
    options: Options
    locktypes: Locktype[]
    favorite: boolean
    rating_totals: null
}

export enum FuelType {
    Benzine = 'benzine',
    Elektrisch = 'elektrisch',
}

export enum Locktype {
    Chipcard = 'chipcard',
    Meeting = 'meeting',
    Smartphone = 'smartphone',
}

export type Options = {
    id: number
    automatic: boolean
    winterTires: boolean
    towbar: boolean
}

export enum ParkingType {
    Default = 'default',
    ParkingSpot = 'parking_spot',
    Zone = 'zone',
}

export type Price = {
    id: number
    hourRate: string
    kilometerRate: string
    fuelPerKilometer: string
    dayRateTotal: string
}

export enum ResourceType {
    Car = 'car',
    ElektrischeAuto = 'Elektrische auto',
    Gezinsauto = 'Gezinsauto',
}
