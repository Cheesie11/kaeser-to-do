/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    changeTheme: (theme: string) => {}
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
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
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};