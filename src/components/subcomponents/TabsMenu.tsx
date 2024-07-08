import { useState } from "react";

interface Tab {
  title: string;
  content: React.ReactNode;
  key: string;
}

/**
 * This is a menu component with multiple tabs.
 * @param Tabs Array of tabs, each tab should have a title and a content.
 * @param InitialTab Optional initial tab.
 * @param OnTabChange Optional function called after changing tab.
 */
const TabsMenu: React.FC<{
  Tabs: Tab[];
  InitialTab?: number;
  OnTabChange?: (tab: Tab) => void;
}> = (props) => {
  const [tabNumber, setTabNumber] = useState<number>(props.InitialTab && props.InitialTab > 0 ? props.InitialTab : 0);

  function getTabsMenuHeader() {
    return (
      <div className="tabs__menu__header">
        {props.Tabs.map((tab, index) => (
          <div
            className={`tab--${tabNumber === index ? "active" : "inactive"}`}
            onClick={() => {
              setTabNumber(index);
              props.OnTabChange?.(tab);
            }}
            key={index}>
            {tab.title}
          </div>
        ))}
      </div>
    );
  }

  return (
    props.Tabs.length >= 0 && (
      <div className="tabs__menu">
        {getTabsMenuHeader()}
        <div className="tabs__menu__content">{props.Tabs[tabNumber].content}</div>
      </div>
    )
  );
};

export default TabsMenu;
