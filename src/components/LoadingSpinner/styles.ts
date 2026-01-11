/** @format */

import { createUseStyles } from "react-jss";
import { colors } from "@/theme";

export const useLoadingSpinnerStyles = createUseStyles({
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "200px",
  },

  loadingSpinner: {
    width: "50px",
    height: "50px",
    border: `4px solid ${colors.background.light}`,
    borderTop: `4px solid ${colors.primary.main}`,
    borderRadius: "50%",
    animation: "$spin 1s linear infinite",
  },

  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
});
