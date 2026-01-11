/** @format */

import { createUseStyles } from "react-jss";
import { colors } from "@/theme";

export const useErrorMessageStyles = createUseStyles({
  errorContainer: {
    background: colors.error.background,
    color: colors.error.text,
    padding: "16px",
    borderRadius: "8px",
    borderLeft: `4px solid ${colors.error.border}`,
  },

  errorTitle: {
    margin: "0 0 8px 0",
    fontSize: "1.1rem",
  },

  errorMessage: {
    margin: 0,
    fontSize: "0.9rem",
  },
});
