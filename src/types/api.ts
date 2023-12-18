import {FuelType, SearchResultItem} from './search'

export interface ApiResponse<ResultType> {
    jsonrpc: string
    authenticated: boolean
    result: ResultType
    id: number
}

export interface PaginatedResult<ResultType> {
    results: ResultType[]
    current: number
    offset: number
    limit: number
    total: number
}

export enum Methods {
    SearchMap = 'search.map',
}

export type ApiResults = {
    [Methods.SearchMap]: ApiResponse<PaginatedResult<SearchResultItem>>
}

export type ApiParams = {
    [Methods.SearchMap]: {
        filter: {
            onlyAvailable?: boolean
            models?: Array<string>
            fuelType?: FuelType | null
            towbar?: boolean
            winterTires?: boolean
        }
        locationPoint: {
            latitudeMax: number
            latitudeMin: number
            longitudeMax: number
            longitudeMin: number
        }
    }
}
