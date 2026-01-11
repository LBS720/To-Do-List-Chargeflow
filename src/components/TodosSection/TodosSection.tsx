/** @format */

import type { Todo } from "@/api/types";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { TodosList } from "@/components/TodosList/TodosList";
import { TodosFilter } from "@/components/TodosFilter/TodosFilter";
import { useTodosSectionStyles } from "./styles";
import { TODOS_SECTION_CONTENT } from "./content";

interface TodosSectionProps {
  todos: Todo[];
  isLoading: boolean;
  error: Error | null;
  selectedUserId: number | null;
  hideCompleted: boolean;
  onToggleFilter: () => void;
}

export const TodosSection = ({
  todos,
  isLoading,
  error,
  selectedUserId,
  hideCompleted,
  onToggleFilter,
}: TodosSectionProps) => {
  const classes = useTodosSectionStyles();

  return (
    <section className={classes.section}>
      <SectionHeader
        title={TODOS_SECTION_CONTENT.sectionTitle}
        count={selectedUserId ? todos.length : undefined}
        actions={
          selectedUserId ? (
            <TodosFilter
              hideCompleted={hideCompleted}
              onToggle={onToggleFilter}
              label={TODOS_SECTION_CONTENT.filterLabel}
            />
          ) : undefined
        }
      />
      <TodosList
        todos={todos}
        isLoading={isLoading}
        error={error}
        selectedUserId={selectedUserId}
        hideCompleted={hideCompleted}
      />
    </section>
  );
};
