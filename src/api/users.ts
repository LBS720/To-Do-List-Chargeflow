/** @format */

import type { User } from "./types/user";
import type { UsersResponse } from "./types/usersResponse";
import { apiRequest, API_BASE_URL } from "./apiClient";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await apiRequest<UsersResponse>(
    `${API_BASE_URL}/users?limit=30`
  );
  return response.users;
};

export const fetchUser = async (userId: number): Promise<User> => {
  return apiRequest<User>(`${API_BASE_URL}/users/${userId}`);
};
