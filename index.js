#! /home/maghraby/.nvm/versions/node/v18.0.0/bin/node

import { program } from "commander";
import list from "./commands/list.js";
import add from "./commands/add.js";
import markDone from "./commands/markDone.js";
import clear from "./commands/clear.js";
import deleteTask from "./commands/delete.js";
import markUnDone from "./commands/markUnDone.js";

program.command("list").description("list your todo items").action(list);

program.command("add <taskname>").description("add todo item").action(add);

program
  .command("mark-done")
  .description("mark a todo item as done")
  .requiredOption("-t, --tasks <tasks...>", "tasks to mark as done")
  .action(markDone);

program
  .command("mark-undone")
  .description("mark a todo item as un-done")
  .requiredOption("-t, --tasks <tasks...>", "tasks to mark as un-done")
  .action(markUnDone);

program
  .command("delete")
  .description("delete a todo item")
  .requiredOption("-t, --tasks <tasks...>", "tasks to delete")
  .action(deleteTask);

program.command("clear").description("clears all todo items").action(clear);

program.parse();
