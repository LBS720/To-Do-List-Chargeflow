/** @format */

export const ROUTES = {
  HOME: "/",
  NOT_FOUND: "*",
} as const;

export type RouteKeys = keyof typeof ROUTES;
