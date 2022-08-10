import './App.css';
import React, { useEffect, useState } from 'react';
import  TodoListMobX from './components/TodoList/TodoListMobX.tsx';
import { useTranslation } from "react-i18next";
import {
    Routes,
    Route,
    Navigate,
    NavLink,
} from 'react-router-dom';
import ThemeColor from './components/ThemeColor/ThemeColor';
import './i18n.js';
import i18n from "i18next";
import { storeMobX } from './storeMobX/todoStoreMobX.ts';
import { observer } from 'mobx-react-lite';
import { Context } from './context/context.ts'
import { lang } from './api/langs.js';



const AppMobX = observer(() => {
    const { t } = useTranslation();
    const {todoStorage} = storeMobX;
    const [workCopy, setWorkCopy] = useState(todoStorage);
    const [filter, setFilter] = useState('default');

    useEffect(() => {
        switch (filter) {
            case 'ready':
                return setWorkCopy(
                    todoStorage.filter(todo => todo.status === true)
                );
            case 'notReady':
                return setWorkCopy(
                    todoStorage.filter(todo => todo.status === false)
                );
            default:
                return setWorkCopy(todoStorage);
        }
    },[todoStorage, filter])


    return (
        <div
            className="main__wrapper"
        >
            <div className="main__wrapper-user_settings">
                <ThemeColor />

                <div className="lang_buttons">
                    {
                        lang.map(lang => (
                            <button
                                key={lang}
                                type="button"
                                className={
                                    localStorage.getItem('i18nextLng') === lang
                                        ? "buttons active"
                                        : "buttons"
                                }
                                onClick={
                                    () => i18n.changeLanguage(lang)}
                            >
                                {lang}
                            </button>
                        ))
                    }

                </div>

            </div>

            <div className="main__wrapper-container">
                <div className="main__wrapper-tabs">
                    <NavLink
                        to="/home"
                        className="link_button"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/todo"
                        className="link_button"
                    >
                        Todo
                    </NavLink>

                </div>

                <div className="main__wrapper-content">
                    <Routes>
                        <Route path="/home" element={<h1>Home page</h1>} />
                        {/*<Route path="/home" element={<Navigate to="/" replace />} />*/}

                        <Route path="todo" element={
                            <Context.Provider value={{
                                setFilter
                            }}>
                                <TodoListMobX todos={workCopy} />
                            </Context.Provider>
                        } />

                    </Routes>
                </div>
            </div>


        </div>
    );
})
export default AppMobX;
