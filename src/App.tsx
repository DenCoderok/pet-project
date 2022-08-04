import './App.css';
import React, { useEffect, useState } from 'react';
import ThemeColor from './components/ThemeColor/ThemeColor';
import  TodoList from './components/TodoList/TodoList.tsx';
import { useLocalStorage } from './hooks/forLocalStorage.js';
import { useTranslation } from "react-i18next";
import {
    Routes,
    Route,
    Navigate,
    NavLink,
} from "react-router-dom";
import {lang} from './api/langs.js';
import './i18n.js';
import i18n from "i18next";
import {store} from './store/todoStore.ts';
import {observer} from "mobx-react-lite";



const App = observer(() => {
    const { t } = useTranslation();

    const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false);


    const filterTypes = [
        {title: t('filter_title.all'), filterType: 'all'},
        {title: t('filter_title.ready'), filterType: 'ready'},
        {title: t('filter_title.not_ready'), filterType: 'notReady'},
    ]

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
                            <TodoList
                                todos={store.todoStorage}
                                addTodoItem={store.addTodoItem}
                                //onStatusChange={onStatusChange}
                                inputValue={store.inputValue}
                                //onInputValueChange={onInputValueChange}
                                //removeTodoItem={removeTodoItem}
                               // editTodo={editTodo}
                                isInputEmpty={isInputEmpty}
                            />
                        } />
                    </Routes>
                </div>
            </div>

            {/*{filterTypes.map(elem =>(
                <button
                    className="buttons"
                    onClick={() => setTest(elem.filterType)}
                >
                    {elem.title}
                </button>
            ))}*/}
            <button
                onClick={() => store.addTodoItem()}
            >
                addd
            </button>
        </div>
    );
})
export default App;
