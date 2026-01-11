/** @format */

import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { useErrorPageStyles } from "./styles";
import { ERROR_PAGE_CONTENT } from "./content";

export const ErrorPage = () => {
  const classes = useErrorPageStyles();
  const error = useRouteError();

  let errorMessage: string = ERROR_PAGE_CONTENT.defaultMessage;
  let errorStatus: string = ERROR_PAGE_CONTENT.defaultStatus;
  let errorStack: string | undefined;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || errorMessage;
    errorStatus = error.status.toString();
  } else if (error instanceof Error) {
    errorMessage = error.message;
    errorStack = error.stack;
  }

  return (
    <div className={classes.errorContainer}>
      <div className={classes.errorIcon}>
        <ERROR_PAGE_CONTENT.ErrorIcon />
      </div>
      <h1 className={classes.errorTitle}>
        {ERROR_PAGE_CONTENT.titlePrefix} {errorStatus}
      </h1>
      <p className={classes.errorMessage}>{errorMessage}</p>
      {errorStack && <pre className={classes.errorDetails}>{errorStack}</pre>}
      <Link to="/" className={classes.homeButton}>
        {ERROR_PAGE_CONTENT.homeButtonText}
      </Link>
    </div>
  );
};
