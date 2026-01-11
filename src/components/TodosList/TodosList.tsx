/** @format */

import type { Todo as TodoType } from "@/api/types";
import { Todo } from "@/components/Todo/Todo";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import { EmptyState } from "@/components/EmptyState/EmptyState";
import { TODOS_LIST_CONTENT } from "./content";
import { useTodosListStyles } from "./styles";
import { constants } from "@/theme";

interface TodosListProps {
  todos: TodoType[];
  isLoading: boolean;
  error: Error | null;
  selectedUserId: number | null;
  hideCompleted: boolean;
}

export const TodosList = ({
  todos,
  isLoading,
  error,
  selectedUserId,
  hideCompleted,
}: TodosListProps) => {
  const classes = useTodosListStyles();

  if (!selectedUserId) {
    return (
      <EmptyState
        Icon={TODOS_LIST_CONTENT.SelectUserIcon}
        message={TODOS_LIST_CONTENT.selectUserMessage}
        iconSize={constants.iconSize.large}
      />
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorMessage
        title={TODOS_LIST_CONTENT.errorTitle}
        message={
          error instanceof Error
            ? error.message
            : TODOS_LIST_CONTENT.unknownError
        }
      />
    );
  }

  if (todos.length === constants.defaults.todoCount) {
    return (
      <EmptyState
        Icon={TODOS_LIST_CONTENT.AllCompletedIcon}
        message={
          hideCompleted
            ? TODOS_LIST_CONTENT.allCompletedMessage
            : TODOS_LIST_CONTENT.noTasksMessage
        }
        iconSize={constants.iconSize.large}
      />
    );
  }

  return (
    <div className={classes.todosList}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
