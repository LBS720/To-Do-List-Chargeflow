/** @format */

import type { Todo } from "./types/todo";
import type { TodosResponse } from "./types/todosResponse";
import { apiRequest, API_BASE_URL } from "./apiClient";

export const fetchTodos = async (userId: number): Promise<Todo[]> => {
  const response = await apiRequest<TodosResponse>(
    `${API_BASE_URL}/todos/user/${userId}`
  );
  return response.todos;
};

export const fetchAllTodos = async (): Promise<Todo[]> => {
  const response = await apiRequest<TodosResponse>(
    `${API_BASE_URL}/todos?limit=100`
  );
  return response.todos;
};
