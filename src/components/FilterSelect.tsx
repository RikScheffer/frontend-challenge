import stylex from '@stylexjs/stylex'
import {FC} from 'react'
import {SelectOption} from '../types/input'
import {FilterState, useFilterContext} from '../FilterContext'

type Props = {
    options: Array<SelectOption>
    label: string
    filterKey: keyof FilterState
}

const fallbackValue = 'fallback'

export const FilterSelect: FC<Props> = ({label, options, filterKey}) => {
    const {update, ...filterContext} = useFilterContext()
    const value = filterContext[filterKey]
    return (
        <select
            onChange={event =>
                update(
                    filterKey,
                    event.target.value === fallbackValue
                        ? undefined
                        : event.target.value,
                )
            }
            value={value?.toString() ?? fallbackValue}
            {...stylex.props(
                styles.button,
                value ? styles.enabled : styles.notEnabled,
            )}>
            <option
                value={fallbackValue}
                {...stylex.props(styles.fallbackOption)}>
                {label}
            </option>
            {options.map(option => (
                <option
                    key={option.value}
                    value={option.value}
                    {...stylex.props(
                        value === option.value
                            ? styles.enabled
                            : styles.notEnabled,
                    )}>
                    {option.label}
                </option>
            ))}
        </select>
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
    fallbackOption: {
        backgroundColor: 'rgb(225, 225, 225)',
        color: 'grey',
    },
})
