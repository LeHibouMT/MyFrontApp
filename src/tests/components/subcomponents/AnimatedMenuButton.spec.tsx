import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import AnimatedMenuButton from "components/subcomponents/AnimatedMenuButton";

describe("AnimatedMenuButton", () => {
  it("renders the button with correct false state", () => {
    render(<AnimatedMenuButton checked={false} />);
    expect(screen.getByRole("button")).not.toBeChecked();
  });

  it("renders the button with correct active state", () => {
    render(<AnimatedMenuButton checked={true} />);
    expect(screen.getByRole("button")).toBeChecked();
  });

  it("button readOnly", () => {
    render(<AnimatedMenuButton checked={true} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByRole("button")).toBeChecked();
  });
});
