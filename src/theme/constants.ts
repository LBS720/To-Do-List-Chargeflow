/** @format */

export const constants = {
  defaults: {
    userCount: 0,
    todoCount: 0,
  },

  iconSize: {
    small: "small",
    medium: "medium",
    large: "large",
  },
} as const;

export type IconSize =
  (typeof constants.iconSize)[keyof typeof constants.iconSize];
