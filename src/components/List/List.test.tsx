import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it } from "vitest";

import List from "./List";

describe("List", () => {
  it("should render a list", () => {
    render(<List items={[
      { id: "1", value: "One" },
      { id: "2", value: "Two" },
      { id: "3", value: "Three" },
    ]} />);

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
    expect(list).toHaveTextContent("One");
    expect(list).toHaveTextContent("Two");
    expect(list).toHaveTextContent("Three");
  });

  it("should render a checkbox for each list element", () => {
    const mockItems = [
      { id: "1", value: "One" },
      { id: "2", value: "Two" },
      { id: "3", value: "Three" },
    ];

    render(<List items={mockItems} />);

    const checkboxes = screen.getAllByRole("checkbox");

    expect(checkboxes.length).toBe(mockItems.length);

    mockItems.forEach((item, index) => {
      const checkbox = checkboxes[index];
      expect(checkbox).toBeInTheDocument();
    });
  });

  it("should mark only the selected checkbox", () => {
    const mockItems = [
      { id: "1", value: "One" },
      { id: "2", value: "Two" },
      { id: "3", value: "Three" },
    ];

    render(<List items={mockItems} />);

    const checkboxes = screen.getAllByRole("checkbox");

    // Simulate clicking the second checkbox
    fireEvent.click(checkboxes[1]);

    // Check that only the second checkbox is checked
    checkboxes.forEach((checkbox, index) => {
      if (index === 1) {
        expect(checkbox).toBeChecked();
      } else {
        expect(checkbox).not.toBeChecked();
      }
    });
  });
});
