import { CountryGridItem } from "./CountryGridItem"

export const CountryGrid = ({ countries }) => {
    return (
        <div className="country-list">
            {
                countries.length > 0 && countries.map((country, index) => (
                    <CountryGridItem country={country} key={index} />
                ))
            }
        </div>
    )
}