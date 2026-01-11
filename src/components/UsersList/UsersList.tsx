/** @format */

import type { User } from "@/api/types";
import { UserCard } from "@/components/UserCard/UserCard";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import { EmptyState } from "@/components/EmptyState/EmptyState";
import { USERS_LIST_CONTENT } from "./content";
import { useUsersListStyles } from "./styles";
import { constants } from "@/theme";

interface UsersListProps {
  users: User[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const UsersList = ({ users, isLoading, error }: UsersListProps) => {
  const classes = useUsersListStyles();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorMessage
        title={USERS_LIST_CONTENT.errorTitle}
        message={
          error instanceof Error
            ? error.message
            : USERS_LIST_CONTENT.unknownError
        }
      />
    );
  }

  if (!users || users.length === constants.defaults.userCount) {
    return (
      <EmptyState
        Icon={USERS_LIST_CONTENT.EmptyIcon}
        message={USERS_LIST_CONTENT.emptyMessage}
        iconSize={constants.iconSize.large}
      />
    );
  }

  return (
    <div className={classes.usersGrid}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
