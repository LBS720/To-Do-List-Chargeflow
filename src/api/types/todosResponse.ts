/** @format */

import type { Todo } from "./todo";

export interface TodosResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}
