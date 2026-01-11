/** @format */

import { useMemo } from "react";
import { pipe } from "fp-ts/function";
import { filter } from "fp-ts/Array";
import type { Todo } from "@/api/types";

export const useFilteredTodos = (
  todos: Todo[] | undefined,
  hideCompleted: boolean
) => {
  return useMemo(() => {
    if (!todos) return [];

    return pipe(
      todos,
      hideCompleted
        ? filter((todo: Todo) => !todo.completed)
        : (items: Todo[]) => items
    );
  }, [todos, hideCompleted]);
};
