/** @format */

import { useState } from "react";

export const useTodo = (initialCompleted: boolean) => {
  const [completed, setCompleted] = useState(initialCompleted);

  const handleToggle = () => {
    setCompleted(!completed);
  };

  return {
    completed,
    handleToggle,
  };
};
