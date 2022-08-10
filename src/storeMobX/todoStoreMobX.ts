import {
    makeAutoObservable,
    makeObservable,
} from 'mobx';

class todoStoreMobX {
    constructor() {
        makeAutoObservable(this);
    }

    todoStorage:TodoItemType[] = JSON.parse(localStorage.getItem('Todo List')) || [];
    inputValue:string = '';
    initialInputValue:string;
    isInputEmpty:boolean = false;

    onChangeInputValue(e) {
        this.inputValue = e.target.value;
        this.isInputEmpty = false;
    }

    addTodoItem() {

        if (!this.inputValue) {
            this.isInputEmpty = true;
            return;
        }

        const currentDate = new Date();
        this.todoStorage = [
            ...this.todoStorage,
            {
                id: Math.floor(Math.random() * 1000),
                value: this.inputValue,
                status: false,
                date: currentDate.toLocaleDateString(),
                time: currentDate.toLocaleTimeString(),
                isEditable: false,
            }]

        this.inputValue = '';
        localStorage.setItem('Todo List', JSON.stringify(this.todoStorage));
    }

    removeTodoItem = (id:number) => {
        this.todoStorage = this.todoStorage.filter(todo => todo.id !== id);
        localStorage.setItem('Todo List', JSON.stringify(this.todoStorage));
    }

    onStatusChange = (id:number) => {

        this.todoStorage = this.todoStorage.map((elem) => ({
            ...elem,
            status: id === elem.id ? !elem.status : elem.status,
        }))
        localStorage.setItem('Todo List', JSON.stringify(this.todoStorage));
    }

    onEditableChange = (id:number) => {

        this.todoStorage = this.todoStorage.map((elem) => ({
            ...elem,
            isEditable: id === elem.id ? !elem.isEditable : elem.isEditable,
        }))
        localStorage.setItem('Todo List', JSON.stringify(this.todoStorage));
    }

    handleKeyDown = (event) => {
        if(event.keyCode === 13) {
            this.addTodoItem();
        }
    }

    editTodo = (todoId:number, value:string) => {
        this.todoStorage = this.todoStorage.map(todo => {
            if (todo.id !== todoId) {
                return todo;
            }
            return {...todo, value, isEditable: false,}
        })
        localStorage.setItem('Todo List', JSON.stringify(this.todoStorage));
    }

}

export const storeMobX = new todoStoreMobX();

