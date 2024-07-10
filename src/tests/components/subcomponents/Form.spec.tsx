import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from "components/subcomponents/Form";

describe("Form component", () => {
  const onSubmitData = jest.fn();
  const handleReset = jest.fn();

  it("renders the form content", () => {
    const { getByText } = render(
      <Form
        content={<div>Form Content</div>}
        onSubmitData={onSubmitData}
        handleReset={handleReset}
      />
    );

    expect(getByText("Form Content")).toBeInTheDocument();
  });

  it("calls onSubmitData function with form data on submit", async () => {
    const onSubmitDataMock = jest.fn().mockImplementation((formdata: FormData) => {
      const data = formdata.get("test");
      return data;
    });

    const { container } = render(
      <Form
        content={
          <input
            id="test"
            data-testid="test"
            type="text"
            name="test"
            defaultValue=""
          />
        }
        onSubmitData={onSubmitDataMock}
        handleReset={handleReset}
      />
    );

    fireEvent.change(screen.getByTestId("test"), { target: { value: "testvalue" } });

    fireEvent.submit(container.getElementsByClassName("form")[0]);

    await waitFor(() => {
      expect(onSubmitDataMock).toHaveReturnedWith("testvalue");
    });
  });

  it("not calls onSubmitData function with form data on submit without any input", async () => {
    const { container } = render(
      <Form
        content={<></>}
        onSubmitData={onSubmitData}
        handleReset={handleReset}
      />
    );

    fireEvent.submit(container.getElementsByClassName("form")[0]);

    expect(onSubmitData).not.toHaveBeenCalled();
  });

  it("calls both functions on buttons click", () => {
    render(
      <Form
        content={
          <input
            id="test"
            data-testid="test"
            type="text"
            name="test"
            defaultValue=""
          />
        }
        onSubmitData={onSubmitData}
        handleReset={handleReset}
      />
    );

    fireEvent.click(screen.getByText("Cancel"));
    fireEvent.click(screen.getByText("Confirm"));
    expect(onSubmitData).toHaveBeenCalled();
    expect(handleReset).toHaveBeenCalled();
  });

  it("calls reset functions on cancel button click when no handleReset", () => {
    render(
      <Form
        content={
          <input
            id="test"
            data-testid="test"
            type="text"
            name="test"
            defaultValue=""
          />
        }
        onSubmitData={onSubmitData}
      />
    );

    fireEvent.change(screen.getByTestId("test"), { target: { value: "testvalue" } });

    expect(screen.getByDisplayValue("testvalue")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Cancel"));

    expect(screen.queryByDisplayValue("testvalue")).not.toBeInTheDocument();
  });

  it("disables buttons when disabled prop is true", () => {
    render(
      <Form
        content={<div>Form Content</div>}
        onSubmitData={onSubmitData}
        handleReset={handleReset}
        disabled={true}
      />
    );

    expect(screen.getByText("Confirm")).toBeDisabled();
    expect(screen.getByText("Cancel")).toBeDisabled();
  });
});
