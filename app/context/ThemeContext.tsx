'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    changeTheme: (theme: string) => {}
});

export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState('light');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const storedTheme = localStorage.getItem('theme') || "light";
        setTheme(storedTheme);
    }, []);

    if (!isMounted) {
        return <>Loading...</>;
    }

    const changeTheme = (theme: string) => {
        setTheme(theme);
        localStorage.setItem('theme', theme);
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
