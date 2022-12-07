import Image from 'next/image'
import { formatNumber } from '../../utils'

export const CountryGridItem = ({ country }) => {
    return (
        <div className="country-item">
            <Image width={320} height={213} src={country.flags.png} alt={country.name} />
            <div className="country-info">
                <h2 className="country-name">{country.name}</h2>
                <span><strong>Population:</strong>{formatNumber(country.population)}</span>
                <span><strong>Region:</strong>{country.region}</span>
                <span><strong>Capital:</strong>{country.capital}</span>
            </div>
        </div>
    )
}