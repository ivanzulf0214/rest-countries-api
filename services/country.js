export const fetchAllCountries = async () => {
    return await fetch("http://localhost:3000/api/countries").then(response => response.json())
}