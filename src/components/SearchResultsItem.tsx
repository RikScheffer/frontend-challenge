import {FC} from 'react'
import {SearchResultItem} from '../types/search'
import stylex from '@stylexjs/stylex'
import {getAvailabilityText} from '../utils/getAvailabilityText'
import {getFuelTypeText} from '../utils/getFuelTypeText'

type Props = {
    item: SearchResultItem
}

export const SearchResultsItem: FC<Props> = ({
    item: {
        availability,
        resource: {brand, model, city, location, fuelType, price},
    },
}) => (
    <div {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.flex, styles.brandModelAndFuelType)}>
            {brand} {model} <br />
            {getFuelTypeText(fuelType)}
        </div>
        <div {...stylex.props(styles.flex, styles.address)}>
            {location}, {city}
        </div>
        <div {...stylex.props(styles.flex, styles.availabilityAndPrice)}>
            {getAvailabilityText(availability)}
            <br />
            &euro; {price.hourRate} per hour
        </div>
    </div>
)

const styles = stylex.create({
    container: {
        width: '100%',
        maxWidth: 800,
        flexDirection: 'row',
        display: 'flex',
        marginBottom: 10,
        gap: 5,
        backgroundColor: '#F0FFF0',
        padding: 10,
        borderRadius: 5,
    },
    flex: {
        flexShrink: 1,
        flexBasis: 0,
        minWidth: 200,
    },
    brandModelAndFuelType: {
        flexGrow: 2,
    },
    address: {
        flexGrow: 2,
    },
    availabilityAndPrice: {
        flexGrow: 1,
    },
})
