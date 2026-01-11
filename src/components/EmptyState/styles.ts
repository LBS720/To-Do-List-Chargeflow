/** @format */

import { createUseStyles } from "react-jss";
import { colors } from "@/theme";

export const useEmptyStateStyles = createUseStyles({
  emptyState: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem",
    textAlign: "center",
    minHeight: "200px",
  },

  emptyStateIcon: {
    color: colors.text.secondary,
    marginBottom: "1rem",
    opacity: 0.5,
  },

  emptyStateMessage: {
    color: colors.text.secondary,
    fontSize: "1rem",
    margin: 0,
  },
});
