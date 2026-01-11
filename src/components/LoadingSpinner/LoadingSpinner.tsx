/** @format */

import { useLoadingSpinnerStyles } from "./styles";

export const LoadingSpinner = () => {
  const classes = useLoadingSpinnerStyles();

  return (
    <div className={classes.loadingContainer}>
      <div className={classes.loadingSpinner} />
    </div>
  );
};
