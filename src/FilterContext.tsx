import {
    FC,
    ReactNode,
    createContext,
    useContext,
    useMemo,
    useState,
} from 'react'
import {FuelType} from './types/search'

export type FilterState = {
    onlyAvailable: boolean
    winterTires: boolean
    towbar: boolean
    model: string
    modelFilter: boolean
    fuelType: FuelType | undefined
}

type UpdateContext<T> = {
    update: <Key extends keyof T>(key: Key, newValue: T[Key]) => void
}

const filterDefaultState: FilterState = {
    onlyAvailable: false,
    winterTires: false,
    towbar: false,
    model: '',
    modelFilter: false,
    fuelType: undefined,
}

export const FilterContext = createContext<
    FilterState & UpdateContext<FilterState>
>({
    ...filterDefaultState,
    update: <Key extends keyof FilterState>(
        _key: Key,
        _newValue: FilterState[Key],
    ) => null,
})

type ProviderProps = {
    children: ReactNode
}

export const FilterContextProvider: FC<ProviderProps> = ({children}) => {
    const [state, setState] = useState(filterDefaultState)
    const stateValue = useMemo(
        () => ({
            ...state,
            update: <Key extends keyof FilterState>(
                key: Key,
                newValue: FilterState[Key],
            ) => setState(oldState => ({...oldState, [key]: newValue})),
        }),
        [state],
    )

    return (
        <FilterContext.Provider value={stateValue}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => useContext(FilterContext)
