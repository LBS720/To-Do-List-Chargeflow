/** @format */

import { createUseStyles } from "react-jss";
import { colors } from "@/theme";

export const useUserCardStyles = createUseStyles({
  userCardContainer: {
    background: (props: { isSelected: boolean }) =>
      props.isSelected ? colors.primary.light : colors.background.white,
    border: (props: { isSelected: boolean }) =>
      props.isSelected
        ? `2px solid ${colors.primary.main}`
        : `2px solid ${colors.border.light}`,
    borderRadius: "8px",
    padding: "20px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: (props: { isSelected: boolean }) =>
      props.isSelected
        ? `0 4px 12px ${colors.shadow.primary}`
        : `0 2px 4px ${colors.shadow.light}`,
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: `0 4px 12px ${colors.shadow.medium}`,
    },
    "@media (max-width: 768px)": {
      padding: "16px",
    },
  },
  userName: {
    margin: "0 0 8px 0",
    fontSize: "1.25rem",
    color: colors.text.primary,
    fontWeight: 600,
  },
  userUsername: {
    margin: "0 0 16px 0",
    color: colors.text.secondary,
    fontSize: "0.9rem",
  },
  showTodosButton: {
    background: colors.primary.main,
    color: colors.background.white,
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "0.9rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "background 0.2s ease",
    "&:hover": {
      background: colors.primary.dark,
    },
    "&:active": {
      transform: "scale(0.98)",
    },
    "@media (max-width: 768px)": {
      padding: "8px 16px",
      fontSize: "0.85rem",
    },
  },
});
