/** @format */

import { Link } from "react-router-dom";
import { useNotFoundStyles } from "./styles";
import { NOT_FOUND_CONTENT } from "./content";

export const NotFound = () => {
  const classes = useNotFoundStyles();

  return (
    <div className={classes.notFoundContainer}>
      <div className={classes.notFoundIcon}>
        <NOT_FOUND_CONTENT.NotFoundIcon />
      </div>
      <h1 className={classes.notFoundTitle}>{NOT_FOUND_CONTENT.title}</h1>
      <p className={classes.notFoundMessage}>{NOT_FOUND_CONTENT.message}</p>
      <Link to="/" className={classes.homeButton}>
        {NOT_FOUND_CONTENT.homeButtonText}
      </Link>
    </div>
  );
};
