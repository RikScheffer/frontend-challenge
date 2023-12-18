import {useEffect, useState} from 'react'
import {ApiParams, ApiResults, Methods} from '../types/api'

const API_URL = 'https://php-api.mywheels.dev/api/'

export type UseApiResult<Method extends Methods> = {
    data: undefined | ApiResults[Method]
    isLoading: boolean
    error: unknown
}

export const useApi = <Method extends Methods>({
    method,
    params,
}: {
    method: Method
    params: ApiParams[Method]
}): UseApiResult<Method> => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<unknown>()
    const [data, setData] = useState<ApiResults[Method]>()

    useEffect(() => {
        setIsLoading(true)
        setError(undefined)

        fetch(API_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-ref': 'http://www.mywheels.nl',
                'X-Simple-Auth-App-Id':
                    '1_4ufl98675y8088ko4k80wow4soo0g8cog8kwsssoo4k4ggc84k',
            },
            body: JSON.stringify({
                jsonrpc: '2.0',
                id: 0,
                method,
                params,
            }),
        })
            .then(async response => {
                const json = (await response.json()) as ApiResults[Method]
                setData(json)
                setIsLoading(false)
                setError(undefined)
            })
            .catch(error => {
                setError(error)
            })
    }, [JSON.stringify(params)])

    return {isLoading, data, error}
}
