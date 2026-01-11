/** @format */

import { useErrorMessageStyles } from "./styles";

interface ErrorMessageProps {
  title: string;
  message: string;
}

export const ErrorMessage = ({ title, message }: ErrorMessageProps) => {
  const classes = useErrorMessageStyles();

  return (
    <div className={classes.errorContainer}>
      <h3 className={classes.errorTitle}>{title}</h3>
      <p className={classes.errorMessage}>{message}</p>
    </div>
  );
};
