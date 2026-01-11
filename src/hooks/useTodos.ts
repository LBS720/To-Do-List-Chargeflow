/** @format */

import { useQuery } from "@tanstack/react-query";
import { flow } from "fp-ts/function";
import { fetchTodos } from "@/api/todos";

const getTodosForUser = flow((userId: number) => userId, fetchTodos);

export const useTodos = (userId: number | null) => {
  return useQuery({
    queryKey: ["todos", userId],
    queryFn: userId !== null ? () => getTodosForUser(userId) : undefined,
    enabled: userId !== null,
  });
};
