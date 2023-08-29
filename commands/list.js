import chalk from "chalk";
import conf from "conf";
import readline from "readline";

const persistedData = new conf({ projectName: "todos" });

const list = () => {
  const todos = persistedData.get("todo-list");

  if (todos?.length) {
    todos.forEach((todo, index) => {
      if (todo?.done) {
        console.log(chalk.greenBright(`${index + 1}- ${todo?.text}`));
      } else {
        console.log(chalk.yellow(`${index + 1}- ${todo?.text}`));
      }
    });
  } else {
    console.log(chalk.red.bold("your todo list is empty!"));
  }
};

export default list;
