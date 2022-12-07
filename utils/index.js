import { THEME_STORAGE_KEY } from "./constants"

export const formatNumber = (number) => {
    return Intl.NumberFormat("en-US").format(number)
}

export const getCurrentTheme = () => {
    try {
        return localStorage.getItem(THEME_STORAGE_KEY)
    } catch {}

    return {}
}

export const toggleTheme = () => {
    const currentTheme = getCurrentTheme()

    if (currentTheme === "dark") {
        localStorage.setItem(THEME_STORAGE_KEY, "light")
    } else {
        localStorage.setItem(THEME_STORAGE_KEY, "dark")
    }
}