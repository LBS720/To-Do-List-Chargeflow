/** @format */

import type { ReactNode } from "react";
import { useSectionHeaderStyles } from "./styles";

interface SectionHeaderProps {
  title: string;
  count?: number;
  actions?: ReactNode;
}

export const SectionHeader = ({
  title,
  count,
  actions,
}: SectionHeaderProps) => {
  const classes = useSectionHeaderStyles();

  return (
    <div className={classes.sectionHeader}>
      <h2 className={classes.sectionTitle}>
        {title} {count !== undefined && `(${count})`}
      </h2>
      {actions}
    </div>
  );
};
