/** @format */

import { useAppStore } from "@/store/useAppStore";

export const useUserCard = (userId: number) => {
  const selectedUserId = useAppStore((state) => state.selectedUserId);
  const setSelectedUserId = useAppStore((state) => state.setSelectedUserId);

  const isSelected = selectedUserId === userId;

  const handleShowTodos = () => {
    setSelectedUserId(userId);
  };

  return {
    isSelected,
    handleShowTodos,
  };
};
