/** @format */

import type { ComponentType } from "react";
import type { SvgIconProps } from "@mui/material";
import type { IconSize } from "@/theme";
import { constants } from "@/theme";
import { useEmptyStateStyles } from "./styles";

interface EmptyStateProps {
  Icon: ComponentType<SvgIconProps>;
  message: string;
  iconSize?: IconSize;
}

export const EmptyState = ({
  Icon,
  message,
  iconSize = constants.iconSize.large,
}: EmptyStateProps) => {
  const classes = useEmptyStateStyles();

  return (
    <div className={classes.emptyState}>
      <div className={classes.emptyStateIcon}>
        <Icon fontSize={iconSize} />
      </div>
      <p className={classes.emptyStateMessage}>{message}</p>
    </div>
  );
};
