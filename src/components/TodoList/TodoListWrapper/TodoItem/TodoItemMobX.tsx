import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { storeMobX } from '../../../../storeMobX/todoStoreMobX.ts';
import { observer } from 'mobx-react-lite';

type Props = {
    todo: TodoItemType;
}

const TodoItemMobX:React.FC<Props> = ({ todo}) => {

    const [initialValue, setInitialValue] = useState<string>(todo.value);
    const { t } = useTranslation();
    const {
        editTodo,
        onStatusChange,
        onEditableChange,
        removeTodoItem
    } = storeMobX;

    const handleKeyDown = (event) => {
        if(event.keyCode === 13) {
           editTodo(id, initialValue);
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
                todo.isEditable ? (
                    <input
                        type="text"
                        className="eidtable_input"
                        value={initialValue}
                        onChange={(e) => setInitialValue(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e)}
                    />
                ) : (
                    <span
                        className={status ? 'ready' : 'notReady'}
                        onDoubleClick={() => onEditableChange(id)}
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

export default observer(TodoItemMobX);
