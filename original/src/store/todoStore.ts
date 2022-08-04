import {makeAutoObservable, makeObservable} from "mobx";

class todoStore {
    constructor() {
        makeAutoObservable(this);
    }

    todoStorage = JSON.parse(localStorage.getItem('Todo List')) || [];
    inputValue: '';

    changeInputValue(e) {
        this.inputValue = e.target.value;
    }
    addTodoItem() {
        const currentDate = new Date();
        this.todoStorage = [
            ...this.todoStorage,
            {
                id: Math.floor(Math.random() * 1000),
                value: 'this.inputValue',
                status: false,
                date: currentDate.toLocaleDateString(),
                time: currentDate.toLocaleTimeString(),
            }]

       localStorage.setItem('Todo List', JSON.stringify(this.todoStorage));
    }

}

export const store = new todoStore();

