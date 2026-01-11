/** @format */

export const colors = {
  primary: {
    main: "#2196f3",
    light: "#e3f2fd",
    dark: "#1976d2",
  },

  gradient: {
    start: "#667eea",
    end: "#764ba2",
  },

  text: {
    primary: "#333",
    secondary: "#666",
    disabled: "#9e9e9e",
  },

  background: {
    white: "#fff",
    light: "#f5f5f5",
    paper: "#ffffff",
  },

  border: {
    light: "#e0e0e0",
    medium: "#bdbdbd",
    dark: "#f0f0f0",
  },

  error: {
    background: "#ffebee",
    text: "#c62828",
    border: "#c62828",
  },

  shadow: {
    light: "rgba(0, 0, 0, 0.1)",
    medium: "rgba(0, 0, 0, 0.15)",
    primary: "rgba(33, 150, 243, 0.2)",
  },

  scrollbar: {
    track: "#f1f1f1",
    thumb: "#888",
    thumbHover: "#555",
  },
} as const;
