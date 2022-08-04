import React, {useState} from 'react';
import '../../App.css';
import './TodoList.scss';
import { useTranslation } from "react-i18next";
import TodoListWrapper from './TodoListWrapper/TodoListWrapper.tsx';

type Props = {
    todos: TodoItemType[] | [];
    inputValue: string;
    isInputEmpty: boolean;
    onInputValueChange: (value:string) => void;
    onStatusChange: (id:number) => void;
    removeTodoItem: (id:number) => void;
    addTodoItem: () => void;
    editTodo: (todoId:number, value:string) => void;
};

export const TodoList:React.FC<Props> = ({
  todos,
  addTodoItem,
  inputValue,
  onInputValueChange,
  onStatusChange,
  removeTodoItem,
  editTodo,
  isInputEmpty,
}) => {
    const { t } = useTranslation();
    const handleKeyDown = (event) => {
        if(event.keyCode === 13) {
            addTodoItem();
        }
    }
    return (
        <div
            className="todoList__wrapper"
        >
            <input
                type="text"
                className="todoList__wrapper-input"
                value={inputValue}
                placeholder={t("input_previe")}
                onChange={(e) => onInputValueChange(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
            />

            {
                isInputEmpty && (
                    <p className="error">{t("error_empty_input")}</p>
                )
            }

            <div className="todoList__wrapper-container">

                <p>
                    Total items : {todos.length}
                </p>
                <p>
                    Ready Items: {todos.filter(todo => todo.status === true).length}
                </p>
                <p>
                    Not Ready Items: {todos.filter(todo => todo.status === false).length}
                </p>


                <TodoListWrapper
                    todos={todos}
                    onStatusChange={onStatusChange}
                    removeTodoItem={removeTodoItem}
                    editTodo={editTodo}
                />

            </div>

            <button
                type="button"
                onClick={() => addTodoItem()}
                className="button"
            >
                {t('add_todo')}
            </button>




        </div>
    );
};

