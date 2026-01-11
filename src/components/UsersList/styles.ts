/** @format */

import { createUseStyles } from "react-jss";
import { colors } from "@/theme";

export const useUsersListStyles = createUseStyles({
  usersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "16px",
    overflowY: "auto",
    paddingRight: "8px",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: colors.scrollbar.track,
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: colors.scrollbar.thumb,
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: colors.scrollbar.thumbHover,
    },
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "12px",
      overflowY: "visible",
      paddingRight: "0",
    },
  },
});
