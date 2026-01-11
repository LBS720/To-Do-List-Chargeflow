/** @format */

import { createUseStyles } from "react-jss";
import { colors } from "@/theme";

export const usePageHeaderStyles = createUseStyles({
  header: {
    textAlign: "center",
    color: colors.background.white,
    marginBottom: "40px",
    "@media (max-width: 768px)": {
      marginBottom: "30px",
    },
  },

  title: {
    fontSize: "2.5rem",
    margin: "0 0 10px 0",
    fontWeight: 700,
    "@media (max-width: 768px)": {
      fontSize: "2rem",
    },
  },

  subtitle: {
    fontSize: "1.1rem",
    margin: 0,
    opacity: 0.9,
    "@media (max-width: 768px)": {
      fontSize: "1rem",
    },
  },
});
