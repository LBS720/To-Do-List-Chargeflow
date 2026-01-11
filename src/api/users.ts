/** @format */

import type { User } from "./types/user";
import type { UsersResponse } from "./types/usersResponse";
import { apiRequest, API_BASE_URL } from "./apiClient";

const USERS_LIMIT = import.meta.env.USERS_LIMIT || 30;

export const fetchUsers = async (): Promise<User[]> => {
  const response = await apiRequest<UsersResponse>(
    `${API_BASE_URL}/users?limit=${USERS_LIMIT}`
  );
  return response.users;
};

export const fetchUser = async (userId: number): Promise<User> => {
  return apiRequest<User>(`${API_BASE_URL}/users/${userId}`);
};
