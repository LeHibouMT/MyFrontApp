import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TabsMenu, { TabInterface } from "components/subcomponents/TabsMenu";

describe("TabsMenu Component", () => {
  const tabs: TabInterface[] = [
    { id: "1", title: "Tab 1", content: <div>Content 1</div> },
    { id: "2", title: "Tab 2", content: <div>Content 2</div> },
    { id: "3", title: "Tab 3", content: <div>Content 3</div> }
  ];

  it("renders without crashing", () => {
    const { getByText } = render(<TabsMenu tabs={tabs} />);
    expect(getByText("Tab 1")).toBeInTheDocument();
  });

  it("renders initial tab if provided", () => {
    render(
      <TabsMenu
        tabs={tabs}
        initialTab={1}
      />
    );
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("changes tab when a different tab is clicked", async () => {
    render(<TabsMenu tabs={tabs} />);
    fireEvent.click(screen.getByText("Tab 2"));
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("calls onTabChange prop when a tab is clicked", async () => {
    const onTabChangeMock = jest.fn();
    render(
      <TabsMenu
        tabs={tabs}
        onTabChange={onTabChangeMock}
      />
    );
    fireEvent.click(screen.getByText("Tab 3"));
    () => expect(onTabChangeMock).toHaveBeenCalledWith(tabs[2]);
  });

  it("does not change tab if onTabChange returns false", async () => {
    const onTabChangeMock = jest.fn().mockReturnValue(false);
    render(
      <TabsMenu
        tabs={tabs}
        onTabChange={onTabChangeMock}
      />
    );
    fireEvent.click(screen.getByText("Tab 3"));
    expect(screen.queryByText("Content 3")).not.toBeInTheDocument();
  });
});
