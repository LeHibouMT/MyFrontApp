import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "components/subcomponents/Modal";

describe("Modal", () => {
  it("renders the modal content", () => {
    render(<Modal content="This is the modal content" />);
    expect(screen.getByText("This is the modal content")).toBeInTheDocument();
  });

  it("calls the onClose function when closing the modal", () => {
    const onClose = jest.fn();
    const { container } = render(
      <Modal
        content="This is the modal content"
        onClose={onClose}
      />
    );

    fireEvent.click(screen.getByText("×"));
    fireEvent.click(container.getElementsByClassName("modal")[0]);

    expect(onClose).toHaveBeenCalledTimes(2);
  });

  it("does not close the modal when clicking outside of the content", () => {
    const onClose = jest.fn();
    const { container } = render(
      <Modal
        content="This is the modal content"
        onClose={onClose}
        onlyCloseButton={true}
      />
    );

    fireEvent.click(container.getElementsByClassName("modal")[0]);

    expect(onClose).not.toHaveBeenCalled();
  });

  it("renders the modal title", () => {
    render(
      <Modal
        content="This is the modal content"
        title="Modal Title"
      />
    );

    expect(screen.getByText("Modal Title")).toBeInTheDocument();
  });
});
