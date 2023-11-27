import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, vi } from "vitest";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
    it ("should render a checkbox", () => {
        render(<Checkbox onChange={() => { } } disabled={false} id={""} checked={false} />)

        expect(screen.getByRole("checkbox")).toBeInTheDocument();

    })

    it ("should call onChange when changed", async () => {
        const onChange = vi.fn();
        render(<Checkbox onChange={onChange} disabled={false} id={""} checked={false} />);
    
        const checkbox = screen.getByRole("checkbox")
    
        const user = userEvent.setup();
        await user.click(checkbox);
    
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls).toEqual(true);
      })
})

