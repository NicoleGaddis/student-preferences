import { useState, useEffect } from "react";

const useLocalStorage = (defaultValue, currentValue, type = "text") => {
    const [value, setValue] = useState(() => {
        const savedValue = localStorage.getItem(currentValue);
        if (type === "text") {
            return savedValue || defaultValue;
        } else if (type === "bool") {
            return savedValue === defaultValue;
        } else if (type === 'object') {
            return JSON.parse(savedValue) || defaultValue;

        }
    });
    useEffect(() => {
        if (type === "object") {
            localStorage.setItem(currentValue, JSON.stringify(value));
        } else {
            localStorage.setItem(currentValue, value);
        }
    }, [value, currentValue, type]);

    return {
        value: value,
        setValue,
    }
}

export default useLocalStorage;