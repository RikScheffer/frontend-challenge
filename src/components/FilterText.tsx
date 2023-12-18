import stylex from '@stylexjs/stylex'
import {FC} from 'react'
import {FilterState, useFilterContext} from '../FilterContext'

type Props = {
    filterKey: keyof FilterState
    label: string
}

export const FilterText: FC<Props> = ({filterKey, label}) => {
    const {update, ...filterContext} = useFilterContext()
    const value = filterContext[filterKey]
    return (
        <>
            <label htmlFor={`${filterKey}TextInput`}>{label}</label>
            <input
                id={`${filterKey}TextInput`}
                type="text"
                onChange={event => update(filterKey, event.target.value)}
                {...stylex.props(
                    styles.button,
                    value ? styles.enabled : styles.notEnabled,
                )}
                value={value?.toString()}
            />
        </>
    )
}

const styles = stylex.create({
    button: {
        borderRadius: 5,
    },
    enabled: {
        backgroundColor: 'rgb(50, 175, 50)',
    },
    notEnabled: {
        backgroundColor: 'rgb(225, 225, 225)',
    },
})
