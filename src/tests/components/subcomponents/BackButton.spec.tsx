import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import BackButton from "components/subcomponents/BackButton";

describe("BackButton", () => {
  it("calls the onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { container } = render(<BackButton onClick={onClickMock} />);

    fireEvent.click(container.getElementsByClassName("back__button")[0]);

    expect(onClickMock).toHaveBeenCalled();
  });
});
