import chalk from "chalk";
import conf from "conf";
import readline from "readline";

const persistedData = new conf({ projectName: "todos" });

const clear = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("are you sure ? (y-n)", (answer) => {
    if (answer === "y") {
      persistedData.set("todo-list", []);

      console.log(chalk.greenBright.bold("Cleared."));
      rl.close();
    } else {
      console.log(chalk.red.bold("Dismissed."));
      rl.close();
    }
  });
};

export default clear;
