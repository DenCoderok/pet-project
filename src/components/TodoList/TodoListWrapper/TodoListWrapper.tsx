import React from 'react';
import { TodoItem } from "./TodoItem/TodoItem.tsx";

type Props = {
    todos: TodoItemType[] | [];
    onStatusChange: (id:number) => void;
    removeTodoItem: (id:number) => void;
    editTodo: (todoId:number, value:string) => void;
}
const TodoListWrapper:React.FC<Props> = ({
     todos,
     onStatusChange,
     removeTodoItem,
     editTodo
 }) => (
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
                <TodoItem
                    todo={todo}
                    onStatusChange={onStatusChange}
                    removeTodoItem={removeTodoItem}
                    editTodo={editTodo}
                />
            </li>
        ))}
    </ul>
);

export default TodoListWrapper;
