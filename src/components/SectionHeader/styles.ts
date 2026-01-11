/** @format */

import { createUseStyles } from "react-jss";
import { colors } from "@/theme";

export const useSectionHeaderStyles = createUseStyles({
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    paddingBottom: "16px",
    borderBottom: `2px solid ${colors.border.dark}`,
    "@media (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "12px",
    },
  },

  sectionTitle: {
    margin: 0,
    fontSize: "1.5rem",
    color: colors.text.primary,
    fontWeight: 600,
    "@media (max-width: 768px)": {
      fontSize: "1.3rem",
    },
  },
});
