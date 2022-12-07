export default async function handler(req, res) {
    try {
        const response = await fetch("https://restcountries.com/v2/all")
        const data = await response.json()

        res.status(200).json({
            countries: data
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
