/** @format */

import type { User } from "./types/user";
import { apiRequest, API_BASE_URL } from "./apiClient";

export const fetchUsers = async (): Promise<User[]> => {
  return apiRequest<User[]>(`${API_BASE_URL}/users`);
};

export const fetchUser = async (userId: number): Promise<User> => {
  return apiRequest<User>(`${API_BASE_URL}/users/${userId}`);
};
