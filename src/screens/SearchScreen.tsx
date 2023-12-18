import {FC} from 'react'
import {useApi} from '../hooks/useApi'
import {Methods} from '../types/api'
import {SearchResults} from '../components/SearchResults'
import {Filter} from '../components/Filter'
import {useFilterContext} from '../FilterContext'

export const SearchScreen: FC<unknown> = () => {
    const {onlyAvailable, fuelType, towbar, winterTires, model, modelFilter} =
        useFilterContext()

    const {data, isLoading, error} = useApi({
        method: Methods.SearchMap,
        params: {
            filter: {
                onlyAvailable,
                models: modelFilter && model ? [model] : undefined,
                fuelType,
                towbar,
                winterTires,
            },
            locationPoint: {
                latitudeMax: 56,
                latitudeMin: 48,
                longitudeMax: 9,
                longitudeMin: 1,
            },
        },
    })

    return (
        <>
            <Filter />
            <SearchResults
                data={data}
                isLoading={isLoading}
                error={error}
            />
        </>
    )
}
