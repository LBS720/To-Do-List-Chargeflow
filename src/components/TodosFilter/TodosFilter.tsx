/** @format */

import { useTodosFilterStyles } from "./styles";

interface TodosFilterProps {
  hideCompleted: boolean;
  onToggle: () => void;
  label: string;
}

export const TodosFilter = ({
  hideCompleted,
  onToggle,
  label,
}: TodosFilterProps) => {
  const classes = useTodosFilterStyles();

  return (
    <div className={classes.filterContainer}>
      <input
        className={classes.filterCheckbox}
        type="checkbox"
        id="hide-completed"
        checked={hideCompleted}
        onChange={onToggle}
      />
      <label className={classes.filterLabel} htmlFor="hide-completed">
        {label}
      </label>
    </div>
  );
};
