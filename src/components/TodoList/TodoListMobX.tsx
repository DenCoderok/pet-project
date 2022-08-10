import React, { useContext } from 'react';
import '../../App.css';
import './TodoList.scss';
import { useTranslation } from "react-i18next";
import { storeMobX } from '../../storeMobX/todoStoreMobX.ts';
import { observer } from "mobx-react-lite";
import TodoListWrapperMobX from './TodoListWrapper/TodoListWrapperMobX.tsx';
import TodoListButtons from './TodoListButtons/TodoListButtonsMobX.tsx'

type Props = {
    todos: TodoItemType[];
}

const TodoListMobX:React.FC<Props> = ({todos}) => {
    const { t } = useTranslation();



    const {
        inputValue,
        isInputEmpty,
        onChangeInputValue,
        handleKeyDown,
        todoStorage,
    } = storeMobX;
    return (
        <div
            className="todoList__wrapper"
        >
            <input
                type="text"
                className="todoList__wrapper-input"
                value={inputValue}
                placeholder={t("input_previe")}
                onChange={(e) => onChangeInputValue(e)}
                onKeyDown={(e) => handleKeyDown(e)}
            />

            {
                isInputEmpty && (
                    <p className="error">{t("error_empty_input")}</p>
                )
            }

            <div className="todoList__wrapper-container">

                <div className="todoList__wrapper-container__items-info">
                    <p>
                        {t("filter_title.show_total")} : {''}
                        {todoStorage.length}
                    </p>
                    <p>
                        {t("filter_title.show_ready")} : {''}
                        {todoStorage.filter(todo => todo.status === true).length}
                    </p>
                    <p>
                        {t("filter_title.show_notReady")} : {''}
                        {todoStorage.filter(todo => todo.status === false).length}
                    </p>
                </div>

                <TodoListWrapperMobX todos={todos}/>
            </div>

            <TodoListButtons/>
        </div>
    );
};

export default observer(TodoListMobX);
