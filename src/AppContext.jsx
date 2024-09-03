import React, { createContext, useState, useContext } from 'react';

// Создаем контекст
const AppContext = createContext();

// Провайдер контекста
export const AppProvider = ({ children }) => {
    const [state, setState] = useState({
        data: null,
        onSettings: false,
    });

    // Функции для изменения состояния
    const setData = (data) => setState((prevState) => ({ ...prevState, data }));

    const setOnSettings = (onSettings) => setState((prevState) => ({ ...prevState, onSettings }));

    return (
        <AppContext.Provider value={{ ...state, setData, setOnSettings }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);