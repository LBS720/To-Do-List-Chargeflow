/** @format */

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const TODOS_LIST_CONTENT = {
  errorTitle: "Error Loading TODOs",
  unknownError: "An unknown error occurred",
  SelectUserIcon: ArrowBackIcon,
  selectUserMessage: "Select a user to view their TODOs",
  AllCompletedIcon: CheckCircleIcon,
  allCompletedMessage: "All tasks completed!",
  noTasksMessage: "No tasks found",
} as const;
