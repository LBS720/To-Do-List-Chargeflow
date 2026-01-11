/** @format */

import type { User } from "@/api/types";
import { useUserCard } from "./useUserCard";
import { useUserCardStyles } from "./styles";
import { USER_CARD_CONTENT } from "./content";

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  const { isSelected, handleShowTodos } = useUserCard(user.id);
  const classes = useUserCardStyles({ isSelected });

  return (
    <div className={classes.userCardContainer} onClick={handleShowTodos}>
      <h3 className={classes.userName}>
        {user.firstName} {user.lastName}
      </h3>
      <p className={classes.userUsername}>@{user.username}</p>
      <button className={classes.showTodosButton} onClick={handleShowTodos}>
        {USER_CARD_CONTENT.showTodosButton}
      </button>
    </div>
  );
};
