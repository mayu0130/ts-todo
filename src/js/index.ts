import "../css/index.css";
import { appendTodoList, getNewTodo, removeTodoListElement, Todo } from "./todo";
import { getElementById } from "./utils/dom";

let todoList:Todo[] = [];

document.addEventListener("DOMContentLoaded", () =>{
  const registerButton = getElementById("register");
  registerButton.addEventListener("click", () => {
    //新しいTODOをDOMから取得する
    todoList = [...todoList, getNewTodo()];
    console.log(todoList);
    //TODO一覧を表示する
    removeTodoListElement();
    appendTodoList(todoList);
  });
});