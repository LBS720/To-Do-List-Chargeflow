/** @format */

import { createUseStyles } from "react-jss";
import { colors } from "@/theme";

export const useUsersSectionStyles = createUseStyles({
  section: {
    background: colors.background.white,
    borderRadius: "12px",
    padding: "24px",
    boxShadow: `0 8px 24px ${colors.shadow.medium}`,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
    "@media (max-width: 768px)": {
      padding: "20px",
      borderRadius: "8px",
      height: "auto",
      overflow: "visible",
    },
  },
});
