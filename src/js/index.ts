import "../css/index.css";
import { appendTodoList, getNewTodo, removeTodoListElement, Todo } from "./todo";
import { getElementById, getInputElementById } from "./utils/dom";

let todoList:Todo[] = [];
let filterWord: string = "";

document.addEventListener("DOMContentLoaded", () =>{
  // 登録ボタン押下時の処理
  const registerButton = getElementById("register");
  registerButton.addEventListener("click", () => {
    //新しいTODOをDOMから取得する
    todoList = [...todoList, getNewTodo()];
    console.log(todoList);
    //TODO一覧を表示する
    removeTodoListElement();
    appendTodoList(todoList, filterWord, deleteTodo);
  });
  //絞り込み入力時の処理
  const filterInput = getInputElementById("filter");
  filterInput.addEventListener("input", () =>{
  filterWord = filterInput.value

  removeTodoListElement();
   appendTodoList(todoList, filterWord, deleteTodo);
  });
});

/**
 * TODOを削除する
 * @param id
 */
const deleteTodo = (id: number) => {
  todoList = todoList.filter((todo) => todo.id !== id);
  removeTodoListElement();
  appendTodoList(todoList, filterWord, deleteTodo);
}