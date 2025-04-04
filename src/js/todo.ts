import { createElement, getElementById, getInputElementById } from "./utils/dom";

/**
 * TODOの型定義
 */
export type Todo = {
  id: number;
  name: string;
  person: string;
  deadline: string;
}

/**
 * DOMのinput要素から新しいTODOの値を取得する
 * @returns Todo
 */

export const getNewTodo = (): Todo => ({
  id: Date.now(),
  name: getInputElementById("new-todo-name").value,
  person: getInputElementById("new-person").value,
  deadline: getInputElementById("new-deadline").value,
});

/**
 * DOMにTODO一覧を表示する
 */

export const appendTodoList = (_todoList: Todo[], _filterWord: string, deleteTodo: (id: number) => void) => {
  _todoList.
  filter(
    (todo) =>
      todo.name.includes(_filterWord) ||
      todo.person.includes(_filterWord)
  )
  .forEach((todo) => {
    const nameTd = createElement("td", todo.name);
    const personTd = createElement("td", todo.person);
    const deadlineTd = createElement("td", todo.deadline);

    // 削除ボタン
    const deleteButton = createElement("button", "削除");
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));
    // deleteButton.addEventListener("click", () => {
    //   _todoList = _todoList.filter((_todo) => _todo.id !== todo.id);
    //   removeTodoListElement();
    //   appendTodoList(_todoList);
    // });
    const deleteButtonTd = createElement("td");
    deleteButtonTd.appendChild(deleteButton);


    const tr = createElement("tr");
    tr.appendChild(nameTd);
    tr.appendChild(personTd);
    tr.appendChild(deadlineTd);
    tr.appendChild(deleteButtonTd);
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
