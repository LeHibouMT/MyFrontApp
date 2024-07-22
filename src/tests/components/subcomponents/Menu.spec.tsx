import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Menu from "components/subcomponents/Menu";

describe("Menu component", () => {
  it("displays the provided content", () => {
    const { getByText } = render(<Menu content={<div>Content</div>} />);
    expect(getByText("Content")).toBeInTheDocument();
  });

  it("doesn't display the provided content when contentVisible is false", () => {
    const { queryByText } = render(
      <Menu
        content={<div>Content</div>}
        contentVisible={false}
      />
    );
    expect(queryByText("Content")).not.toBeInTheDocument();
  });

  it("calls onClickContent when content is clicked", () => {
    const onClickContent = jest.fn();
    const { getByText } = render(
      <Menu
        content={<div>Content</div>}
        onClickContent={onClickContent}
      />
    );
    fireEvent.click(getByText("Content"));
    expect(onClickContent).toHaveBeenCalled();
  });

  it("displays the provided title", () => {
    const { getByText } = render(
      <Menu
        content={<div>Content</div>}
        title="Menu Title"
      />
    );
    expect(getByText("Menu Title")).toBeInTheDocument();
  });

  it("displays the provided button", () => {
    const Button = () => <button>Button</button>;
    const { getByText } = render(
      <Menu
        content={<div>Content</div>}
        button={Button}
      />
    );
    expect(getByText("Button")).toBeInTheDocument();
  });

  it("calls onClickButton when button is clicked", () => {
    const onClickButton = jest.fn();
    const Button = () => <button onClick={onClickButton}>Button</button>;
    const { getByText } = render(
      <Menu
        content={<div>Content</div>}
        button={Button}
      />
    );
    fireEvent.click(getByText("Button"));
    expect(onClickButton).toHaveBeenCalled();
  });
});
