/** @format */

import type { Todo } from "./types/todo";
import { apiRequest, API_BASE_URL } from "./apiClient";

export const fetchTodos = async (userId: number): Promise<Todo[]> => {
  return apiRequest<Todo[]>(`${API_BASE_URL}/todos?userId=${userId}`);
};

export const fetchAllTodos = async (): Promise<Todo[]> => {
  return apiRequest<Todo[]>(`${API_BASE_URL}/todos`);
};
