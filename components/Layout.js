import Head from "next/head"
import { useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import { getCurrentTheme, toggleTheme } from "../utils"

const Layout = ({ children }) => {

    const [theme, setTheme] = useState()
    const [themeIcon, setThemeIcon] = useState()
    const [themeName, setThemeName] = useState("")

    useEffect(() => {
        setTheme(getCurrentTheme())
        setThemeToggler()
    }, [])

    const changeTheme = () => {
        toggleTheme()
        setThemeToggler()
    }

    const setThemeToggler = () => {
        const theme = getCurrentTheme()

        setTheme(theme)

        if (theme === "light") {
            setThemeIcon(<FaMoon />)
            setThemeName("Dark Mode")
        } else {
            setThemeIcon(<FaSun />)
            setThemeName("Light Mode")
        }
    }

    return (
        <>
            <Head>
                <title>REST Countries API - Frontend Mentor</title>
                <meta name="title" content="REST Countries API - Frontend Mentor" />
                <meta name="description" content="REST Countries API - Frontend Mentor" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`wrapper ${theme}`}>
                <div className="header">
                    <div className="container">
                        <nav>
                            <h1 className="page-title">Where in the world?</h1>
                            <div className="theme-container" onClick={changeTheme}>
                                {themeIcon}
                                <span>{themeName}</span>
                            </div>
                        </nav>
                    </div>
                </div>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout