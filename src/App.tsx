import {FC} from 'react'
import {FilterContextProvider} from './FilterContext'
import {SearchScreen} from './screens/SearchScreen'

export const App: FC = () => (
    <FilterContextProvider>
        <SearchScreen />
    </FilterContextProvider>
)
