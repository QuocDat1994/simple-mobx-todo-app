import { observable, autorun } from "mobx";

class Todo {
  @observable id;
  @observable task;
  @observable completed;

  constructor(task) {
    this.id = Date.now();
    this.task = task;
    this.completed = false;
  }
}

class Store {
  @observable todos = [
    { id: "123123", task: "Doing Presentation", completed: false },
    { id: "234234", task: "Reward myself with a coffee", completed: false },
    { id: "657657", task: "Lie down, try not to cry, cry alot", completed: false }
  ];

  constructor() {
    autorun(() => {
      console.log("test: " + this.todos[0]);
    });
  }

  createTodo(task) {
    this.todos.push(new Todo(task));
  }

  deleteTodo(id) {
    const newTodos = this.todos.filter(todo => todo.id !== id);
    this.todos.replace(newTodos);
  }

  editTodo(id, task) {
    const newTodos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.task = task;
      }
      return todo;
    });
    this.todos.replace(newTodos);
  }

  completedTodo(id) {
    const newTodos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.todos.replace(newTodos);
  }
}

const store = (window.store = new Store());

export default store;
