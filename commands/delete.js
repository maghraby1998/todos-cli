import chalk from "chalk";
import conf from "conf";

const persistedData = new conf({ projectName: "todos" });

const deleteTask = ({ tasks }) => {
  const todos = persistedData.get("todo-list");
  const updatedTodos = todos?.filter((_, index) => {
    return !tasks?.includes((index + 1).toString());
  });

  persistedData.set("todo-list", updatedTodos);

  console.log(chalk.red.bold("Deleted."));
};

export default deleteTask;
