import { createElement, getElementById, getInputElementById } from "./utils/dom";

/**
 * TODOの型定義
 */
export type Todo = {
  name: string;
  person: string;
  deadline: string;
}

/**
 * DOMのinput要素から新しいTODOの値を取得する
 * @returns Todo
 */

export const getNewTodo = (): Todo => ({
  name: getInputElementById("new-todo-name").value,
  person: getInputElementById("new-person").value,
  deadline: getInputElementById("new-deadline").value,
});

/**
 * DOMにTODO一覧を表示する
 */

export const appendTodoList = (todoList: Todo[]) => {
  todoList.forEach((todo) => {
    const nameTd = createElement("td", todo.name);
    const personTd = createElement("td", todo.person);
    const deadlineTd = createElement("td", todo.deadline);
    const tr = createElement("tr");
    tr.appendChild(nameTd);
    tr.appendChild(personTd);
    tr.appendChild(deadlineTd);
    const tBody = getElementById("todo-list");
    tBody.appendChild(tr);
  }
)};

/**
 * DOMのTODO一覧を全て削除する
 */

export const removeTodoListElement = () => {
  const tBody = getElementById("todo-list");
  while (tBody.firstChild) {
    tBody.firstChild.remove();
  }
};
