import Layout from '../components/Layout'
import { CountryGrid } from '../components/country/CountryGrid'
import { getAllCountries } from '../utils/country'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Home = ({ countryList }) => {
  const [filteredCountries, setFilteredCountries] = useState(countryList)

  const onFilterRegionChange = (e) => {
    const selectedRegion = e.target.value

    if (selectedRegion === "all") {
      setFilteredCountries(countryList)
      return
    }

    const filtered = countryList.filter(x => x.region.toLowerCase() === selectedRegion)

    setFilteredCountries(filtered)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    
    const keyword = e.target.keyword.value

    if (keyword === "") {
      setFilteredCountries(countryList)
      return
    }

    const filtered = countryList.filter(country => country.name.toLowerCase().includes(keyword.toLowerCase()))

    setFilteredCountries(filtered)
  }

  return (
    <Layout>
      <div className="container">
        <div className="filter-container">
          <form onSubmit={onFormSubmit}>
            <input type="text" id="keyword" name="keyword" placeholder="Search for a country..." />
            <FaSearch color="#555" />
          </form>
          <div className="region-filter">
            <label>Filter by Region:</label>
            <select onChange={onFilterRegionChange}>
              <option value="all">All</option>
              <option value="africa">Africa</option>
              <option value="americas">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </div>
        <CountryGrid countries={filteredCountries} />
      </div>
    </Layout>
  )
}

export default Home

export const getServerSideProps = async () => {
  try {
    const response = await getAllCountries()

    return {
      props: {
        countryList: response.countries,
      }
    }
  } catch (error) {
    console.log(error)
  }
}