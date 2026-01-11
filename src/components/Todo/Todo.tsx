/** @format */

import type { Todo as TodoType } from "@/api/types";
import { useTodo } from "./useTodo";
import { useTodoStyles } from "./styles";

interface TodoProps {
  todo: TodoType;
}

export const Todo = ({ todo }: TodoProps) => {
  const { completed, handleToggle } = useTodo(todo.completed);
  const classes = useTodoStyles({ completed });

  return (
    <div className={classes.todoItemContainer}>
      <input
        className={classes.todoCheckbox}
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
        aria-label={`Mark "${todo.todo}" as ${
          completed ? "incomplete" : "complete"
        }`}
      />
      <span className={classes.todoTitle}>{todo.todo}</span>
    </div>
  );
};
