import React, {useEffect, useLayoutEffect} from 'react';
import { useTheme } from '../../hooks/theme.js';
import { useLocalStorage } from '../../hooks/forLocalStorage.js';
import '../../App.css';
import {themeColors} from '../../api/themeColors.js';

const ThemeColor = () => {

    const {theme, setTheme} = useTheme();
    const [themeStorage, setThemeStorage] = useLocalStorage('Theme color', theme);

    const onThemeChoose = (e) => {
        const theme = e.target.getAttribute('data-theme');
        setTheme(`${theme}`);
        setThemeStorage(theme);
    }

    useLayoutEffect(() => {
        setTheme(themeStorage);
    },[themeStorage])


    return (
         <div className="themeColor__buttons-wrapper">

             {themeColors.map(color => (
                  <button
                       data-theme={color}
                       className={
                           JSON.parse(localStorage.getItem('Theme color')) === color
                                ? "buttons active"
                                : "buttons"
                       }
                       type="button"
                       key={color}
                       onClick={(e) => onThemeChoose(e)}
                  >
                      {color}
                  </button>
             ) )}

         </div>
    );
};
export default ThemeColor;
