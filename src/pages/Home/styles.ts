/** @format */

import { createUseStyles } from "react-jss";
import { colors } from "@/theme";

export const useHomeStyles = createUseStyles({
  homeContainer: {
    minHeight: "100vh",
    height: "100vh",
    background: `linear-gradient(135deg, ${colors.gradient.start} 0%, ${colors.gradient.end} 100%)`,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    "@media (max-width: 768px)": {
      padding: "16px",
      height: "auto",
      minHeight: "100vh",
      overflow: "auto",
    },
  },
  mainContent: {
    maxWidth: "1400px",
    margin: "0 auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    overflow: "hidden",
    "@media (max-width: 768px)": {
      overflow: "visible",
    },
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
    flex: 1,
    overflow: "hidden",
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "1fr",
      gap: "20px",
      overflow: "visible",
    },
  },
  footer: {
    textAlign: "center",
    color: colors.background.white,
    padding: "16px 0",
    fontSize: "0.9rem",
    opacity: 0.8,
    marginTop: "auto",
    "@media (max-width: 768px)": {
      fontSize: "0.8rem",
      padding: "12px 0",
    },
  },
});
