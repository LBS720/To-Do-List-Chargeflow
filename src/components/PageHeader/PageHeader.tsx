/** @format */

import { usePageHeaderStyles } from "./styles";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  const classes = usePageHeaderStyles();

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.subtitle}>{subtitle}</p>
    </header>
  );
};
