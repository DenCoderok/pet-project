import { useState } from "react";


export const useLocalStorage = (key, initialValue) => {

    const [storage, setStorage] = useState(() => {
             try {
                 return JSON.parse(localStorage.getItem(key) || initialValue)
             } catch (e) {
                 return initialValue
             }
         }
    );

    const save = (value) => {
        setStorage(value);
        localStorage.setItem(key, JSON.stringify(value))
    }
    return [storage, save]
}
