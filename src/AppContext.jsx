import React, { createContext, useState, useContext } from 'react';

// Создаем контекст
const AppContext = createContext();

// Провайдер контекста
export const AppProvider = ({ children }) => {
    const [state, setState] = useState({
        data: null
    });

    // Функции для изменения состояния
    const setData = (data) => setState((prevState) => ({ ...prevState, data }));

    return (
        <AppContext.Provider value={{ ...state, setData }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);