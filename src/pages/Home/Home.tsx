/** @format */

import { useAppStore } from "@/store/useAppStore";
import { useUsers } from "@/hooks/useUsers";
import { useTodos } from "@/hooks/useTodos";
import { useFilteredTodos } from "@/hooks/useFilteredTodos";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { UsersSection } from "@/components/UsersSection/UsersSection";
import { TodosSection } from "@/components/TodosSection/TodosSection";
import { PAGE_HEADER_CONTENT } from "@/components/PageHeader/content";
import { HOME_CONTENT } from "./content";
import { useHomeStyles } from "./styles";

export const Home = () => {
  const classes = useHomeStyles();
  const selectedUserId = useAppStore((state) => state.selectedUserId);
  const hideCompleted = useAppStore((state) => state.hideCompleted);
  const setHideCompleted = useAppStore((state) => state.setHideCompleted);

  const {
    data: users,
    isLoading: isLoadingUsers,
    error: usersError,
  } = useUsers();

  const {
    data: todos,
    isLoading: isLoadingTodos,
    error: todosError,
  } = useTodos(selectedUserId);

  const filteredTodos = useFilteredTodos(todos, hideCompleted);

  const handleFilterChange = () => {
    setHideCompleted(!hideCompleted);
  };

  return (
    <div className={classes.homeContainer}>
      <main className={classes.mainContent}>
        <PageHeader
          title={PAGE_HEADER_CONTENT.title}
          subtitle={PAGE_HEADER_CONTENT.subtitle}
        />
        <div className={classes.contentGrid}>
          <UsersSection
            users={users}
            isLoading={isLoadingUsers}
            error={usersError}
          />
          <TodosSection
            todos={filteredTodos}
            isLoading={isLoadingTodos}
            error={todosError}
            selectedUserId={selectedUserId}
            hideCompleted={hideCompleted}
            onToggleFilter={handleFilterChange}
          />
        </div>
        <footer className={classes.footer}>
          © {HOME_CONTENT.footer.createdBy}
        </footer>
      </main>
    </div>
  );
};
