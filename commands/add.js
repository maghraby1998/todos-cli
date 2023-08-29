import chalk from "chalk";
import conf from "conf";

const persistedData = new conf({ projectName: "todos" });

const add = (taskName) => {
  const todos = persistedData.get("todo-list");

  let newTask = { text: taskName, done: false };

  if (!todos?.length) {
    persistedData.set("todo-list", [newTask]);
  } else {
    todos.push(newTask);
    persistedData.set("todo-list", todos);
  }
};

export default add;
