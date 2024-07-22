import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import RadioButtonsList from "components/subcomponents/RadioButtonsList";

describe("RadioButtonsList Component", () => {
  const boxes = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" }
  ];

  it("renders correctly with all provided options", () => {
    render(
      <RadioButtonsList
        boxes={boxes}
        name="testRadio"
      />
    );
    boxes.forEach((box) => {
      expect(screen.getByLabelText(box.label)).toBeInTheDocument();
    });
  });

  it("selects default checked option if provided", () => {
    render(
      <RadioButtonsList
        boxes={boxes}
        name="testRadio"
        defaultChecked="2"
      />
    );
    expect(screen.getByLabelText("Option 2")).toBeChecked();
  });

  it("calls onChange with the correct value when an option is selected", () => {
    const handleChange = jest.fn();
    render(
      <RadioButtonsList
        boxes={boxes}
        name="testRadio"
        onChange={handleChange}
      />
    );
    fireEvent.click(screen.getByLabelText("Option 1"));
    expect(handleChange).toHaveBeenCalledWith("1");
  });

  it("does not select any option by default if no defaultChecked is provided", () => {
    render(
      <RadioButtonsList
        boxes={boxes}
        name="testRadio"
      />
    );
    boxes.forEach((box) => {
      expect(screen.getByLabelText(box.label)).not.toBeChecked();
    });
  });

  it("respects the checked prop over the defaultChecked prop", () => {
    const { rerender } = render(
      <RadioButtonsList
        boxes={boxes}
        name="testRadio"
        defaultChecked="1"
        checked="2"
      />
    );
    expect(screen.getByLabelText("Option 2")).toBeChecked();

    rerender(
      <RadioButtonsList
        boxes={boxes}
        name="testRadio"
        checked="3"
      />
    );
    expect(screen.getByLabelText("Option 3")).toBeChecked();
  });

  it("does not allow changing the selected option when controlled (checked prop is provided)", () => {
    render(
      <RadioButtonsList
        boxes={boxes}
        name="testRadio"
        checked="2"
      />
    );
    fireEvent.click(screen.getByLabelText("Option 1"));
    expect(screen.getByLabelText("Option 2")).toBeChecked();
  });
});
