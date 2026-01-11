/** @format */

import { createUseStyles } from "react-jss";
import { colors } from "@/theme";

export const useTodosFilterStyles = createUseStyles({
  filterContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  filterCheckbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
    accentColor: colors.primary.main,
  },

  filterLabel: {
    fontSize: "0.95rem",
    color: colors.text.secondary,
    cursor: "pointer",
    userSelect: "none",
    "@media (max-width: 768px)": {
      fontSize: "0.9rem",
    },
  },
});
