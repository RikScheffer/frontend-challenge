import {FC} from 'react'
import {FilterToggle} from './FilterToggle'
import {FilterSelect} from './FilterSelect'
import stylex from '@stylexjs/stylex'
import {SelectOption} from '../types/input'
import {FuelType} from '../types/search'
import {FilterText} from './FilterText'
import {useFilterContext} from '../FilterContext'

const fuelTypeOptions: Array<SelectOption> = [
    {
        label: 'Petrol',
        value: FuelType.Benzine,
    },
    {
        label: 'Electric',
        value: FuelType.Elektrisch,
    },
]

export const Filter: FC = () => {
    const {model, modelFilter} = useFilterContext()
    return (
        <>
            <div {...stylex.props(styles.filter)}>
                <FilterToggle
                    label="Only available"
                    filterKey="onlyAvailable"
                />
                <FilterSelect
                    label="Fuel type"
                    options={fuelTypeOptions}
                    filterKey="fuelType"
                />
                <FilterToggle
                    label="Towbar"
                    filterKey="towbar"
                />
                <FilterToggle
                    label="Winter tires"
                    filterKey="winterTires"
                />
                <FilterToggle
                    label={'Car model' + (modelFilter ? `: ${model}` : '')}
                    filterKey="modelFilter"
                />
            </div>
            {modelFilter && (
                <div {...stylex.props(styles.filter)}>
                    <FilterText
                        label="Car model"
                        filterKey="model"
                    />
                </div>
            )}
        </>
    )
}

const styles = stylex.create({
    filter: {
        gap: 5,
        display: 'flex',
        marginBottom: 10,
    },
})
