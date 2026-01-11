/** @format */

import { createUseStyles } from "react-jss";
import { colors } from "@/theme";

export const useNotFoundStyles = createUseStyles({
  notFoundContainer: {
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

  notFoundIcon: {
    fontSize: "8rem",
    marginBottom: "24px",
    "& svg": {
      fontSize: "inherit",
    },
    "@media (max-width: 768px)": {
      fontSize: "6rem",
    },
  },

  notFoundTitle: {
    fontSize: "4rem",
    margin: "0 0 16px 0",
    fontWeight: 700,
    "@media (max-width: 768px)": {
      fontSize: "3rem",
    },
  },

  notFoundMessage: {
    fontSize: "1.3rem",
    margin: "0 0 32px 0",
    opacity: 0.9,
    "@media (max-width: 768px)": {
      fontSize: "1.1rem",
    },
  },

  homeButton: {
    background: colors.background.white,
    color: colors.primary.main,
    padding: "14px 36px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1.1rem",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: `0 4px 12px ${colors.shadow.medium}`,
    },
  },
});
