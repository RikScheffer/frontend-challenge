import stylex from '@stylexjs/stylex'
import {FC} from 'react'
import {FilterState, useFilterContext} from '../FilterContext'

type Props = {
    filterKey: keyof FilterState
    label: string
}

export const FilterToggle: FC<Props> = ({filterKey, label}) => {
    const {update, ...filterContext} = useFilterContext()
    const enabled = filterContext[filterKey]
    return (
        <button
            onClick={() => update(filterKey, !enabled)}
            {...stylex.props(
                styles.button,
                enabled ? styles.enabled : styles.notEnabled,
            )}>
            {label} {enabled ? 'X' : '+'}
        </button>
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
