import React from 'react';
import { observer } from 'mobx-react-lite';
import TodoItemMobX from "./TodoItem/TodoItemMobX.tsx";

type Props = {
    todos: TodoItemType[];
}

const TodoListWrapperMobX:React.FC<Props> = ({todos}) => (
    <ul
        className="todoList__wrapper-list_items"
    >
        {todos.map((todo) => (
            <li
                key={todo.id}
                className={todo.status
                    ? "todoList__wrapper-item ready"
                    : "todoList__wrapper-item notReady"}
            >
                <TodoItemMobX
                    todo={todo}
                />
            </li>
        ))}
    </ul>
);

export default observer(TodoListWrapperMobX);
