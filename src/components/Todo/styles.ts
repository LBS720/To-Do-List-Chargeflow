/** @format */

import { createUseStyles } from "react-jss";
import { colors } from "@/theme";

export const useTodoStyles = createUseStyles({
  todoItemContainer: {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    background: colors.background.white,
    border: `1px solid ${colors.border.light}`,
    borderRadius: "6px",
    marginBottom: "8px",
    transition: "all 0.2s ease",
    "&:hover": {
      background: colors.background.light,
      borderColor: colors.border.medium,
    },
    "@media (max-width: 768px)": {
      padding: "10px 12px",
    },
  },
  todoCheckbox: {
    width: "18px",
    height: "18px",
    marginRight: "12px",
    cursor: "pointer",
    accentColor: colors.primary.main,
    "@media (max-width: 768px)": {
      width: "16px",
      height: "16px",
      marginRight: "10px",
    },
  },
  todoTitle: {
    flex: 1,
    fontSize: "0.95rem",
    color: (props: { completed: boolean }) =>
      props.completed ? colors.text.disabled : colors.text.primary,
    textDecoration: (props: { completed: boolean }) =>
      props.completed ? "line-through" : "none",
    lineHeight: 1.4,
    "@media (max-width: 768px)": {
      fontSize: "0.9rem",
    },
  },
});
