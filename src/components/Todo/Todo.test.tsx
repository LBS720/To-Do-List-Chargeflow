/** @format */

import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Todo } from "./Todo";
import type { Todo as TodoType } from "@/api/types";

describe("Todo Component", () => {
  const mockTodo: TodoType = {
    userId: 1,
    id: 1,
    todo: "Test todo item",
    completed: false,
  };

  const mockCompletedTodo: TodoType = {
    userId: 1,
    id: 2,
    todo: "Completed todo item",
    completed: true,
  };

  it("renders todo item correctly", () => {
    render(<Todo todo={mockTodo} />);

    expect(screen.getByText("Test todo item")).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("renders completed todo with checked checkbox", () => {
    render(<Todo todo={mockCompletedTodo} />);

    expect(screen.getByText("Completed todo item")).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("toggles checkbox when clicked", () => {
    render(<Todo todo={mockTodo} />);

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  it("has proper aria-label for accessibility", () => {
    render(<Todo todo={mockTodo} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute(
      "aria-label",
      'Mark "Test todo item" as complete'
    );
  });
});
