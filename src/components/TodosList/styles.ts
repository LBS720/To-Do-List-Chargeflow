/** @format */

import { createUseStyles } from "react-jss";
import { colors } from "@/theme";

export const useTodosListStyles = createUseStyles({
  todosList: {
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
      overflowY: "visible",
      paddingRight: "0",
    },
  },
});
