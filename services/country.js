export const fetchAllCountries = async () => {
    return await fetch("https://rest-countries-api-khaki-pi.vercel.app/api/countries").then(response => response.json())
}