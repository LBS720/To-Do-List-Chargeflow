/** @format */

import { createUseStyles } from "react-jss";
import { colors } from "@/theme";

export const useErrorPageStyles = createUseStyles({
  errorContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(135deg, ${colors.gradient.start} 0%, ${colors.gradient.end} 100%)`,
    color: colors.background.white,
    padding: "20px",
    textAlign: "center",
  },

  errorIcon: {
    fontSize: "5rem",
    marginBottom: "24px",
    "& svg": {
      fontSize: "inherit",
    },
  },

  errorTitle: {
    fontSize: "3rem",
    margin: "0 0 16px 0",
    fontWeight: 700,
    "@media (max-width: 768px)": {
      fontSize: "2rem",
    },
  },

  errorMessage: {
    fontSize: "1.2rem",
    margin: "0 0 32px 0",
    opacity: 0.9,
    maxWidth: "600px",
    "@media (max-width: 768px)": {
      fontSize: "1rem",
    },
  },

  errorDetails: {
    background: "rgba(0, 0, 0, 0.2)",
    padding: "16px",
    borderRadius: "8px",
    margin: "0 0 32px 0",
    maxWidth: "800px",
    overflowX: "auto",
    textAlign: "left",
    fontSize: "0.9rem",
  },

  homeButton: {
    background: colors.background.white,
    color: colors.primary.main,
    padding: "12px 32px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1rem",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: `0 4px 12px ${colors.shadow.medium}`,
    },
  },
});
