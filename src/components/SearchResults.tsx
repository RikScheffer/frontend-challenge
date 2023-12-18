import {FC} from 'react'
import {UseApiResult} from '../hooks/useApi'
import {Methods} from '../types/api'
import {SearchResultsItem} from './SearchResultsItem'

type Props = UseApiResult<Methods.SearchMap>

export const SearchResults: FC<Props> = ({data, error, isLoading}) => {
    if (error) {
        return <>Something went wrong, please try again</>
    }
    if (!data || isLoading) {
        return <>Loading...</>
    }

    const {results, total} = data.result

    return (
        <div>
            <p>
                {total} result{total !== 1 ? 's' : ''}
            </p>
            {results.map(item => (
                <SearchResultsItem
                    item={item}
                    key={item.resource.id}
                />
            ))}
        </div>
    )
}
