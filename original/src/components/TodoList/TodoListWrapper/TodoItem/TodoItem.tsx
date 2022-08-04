import React, { useState } from 'react';
import {useTranslation} from "react-i18next";

type Props = {
    todo: TodoItemType;
    onStatusChange: (id:number) => void;
    removeTodoItem: (id:number) => void;
    editTodo: (todoId:number, value:string) => void;
}

export const TodoItem:React.FC<Props> = ({
 todo,
 onStatusChange,
 removeTodoItem,
 editTodo,
}) => {

    const [initialValue, setInitialValue] = useState<string>(todo.value);
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const { t } = useTranslation();

    const handleKeyDown = (event) => {
        if(event.keyCode === 13) {
            editTodo(id, initialValue);
            setIsEditable(!isEditable);
        }
    }
    const { id, value, status } = todo;
    return (
        <>
            <input
                type="checkbox"
                checked={status}
                onChange={() => onStatusChange(id)}
            />

            {
                isEditable ? (
                    <input
                        type="text"
                        className="eidtable_input"
                        value={initialValue}
                        onChange={(e) => {
                            setInitialValue(e.target.value)
                        }}
                        onKeyDown={(e) => handleKeyDown(e)}
                    />
                ) : (
                    <span
                        className={status ? 'ready' : 'notReady'}
                        onDoubleClick={() => setIsEditable(!isEditable)}
                    >
                        {value}
                    </span>
                )
            }

            <button
            type="button"
            className="todoList__wrapper-item__delete_btn"
            onClick={() => removeTodoItem(id)}
            >
                {t('delete_todo')}
            </button>
        </>
    );
};

