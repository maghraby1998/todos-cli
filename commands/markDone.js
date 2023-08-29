import chalk from "chalk";
import conf from "conf";

const persistedData = new conf({ projectName: "todos" });

const markDone = ({ tasks }) => {
  const todos = persistedData.get("todo-list");

  const updatedTodos = todos.map((todo, index) => {
    if (tasks?.includes((index + 1).toString())) {
      return { ...todo, done: true };
    } else {
      return todo;
    }
  });

  persistedData.set("todo-list", updatedTodos);

  console.log(chalk.greenBright("Done."));
};

export default markDone;
