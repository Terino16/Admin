'use client'
import { createContext, useContext, useState } from 'react';

const SelectedOptionContext = createContext();

export const useSelectedOption = () => {
    return useContext(SelectedOptionContext);
};

export const SelectedOptionProvider = ({ children }) => {
    const [selectedOption, setSelectedOption] = useState(0);

    return (
        <SelectedOptionContext.Provider value={{ selectedOption, setSelectedOption }}>
            {children}
        </SelectedOptionContext.Provider>
    );
};