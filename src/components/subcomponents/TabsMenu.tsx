import { useMemo, useState } from "react";

export interface TabInterface<K extends string | number = string> {
  id: K;
  title: string;
  content: React.ReactNode;
}

/**
 * This is a menu component with multiple tabs.
 * @param Tabs Array of tabs, each tab should have a title and a content.
 * @param InitialTab Optional initial tab.
 * @param OnTabChange Optional function called after changing tab.
 */
const TabsMenu: React.FC<{
  Tabs: TabInterface[];
  InitialTab?: number;
  OnTabChange?: (tab: TabInterface) => void;
}> = (props) => {
  const [tabNumber, setTabNumber] = useState<number>(props.InitialTab && props.InitialTab > 0 ? props.InitialTab : 0);

  const menuHeader = useMemo(
    () => (
      <div className="tabs__menu__header">
        {props.Tabs.map((tab, index) => (
          <div
            id={tab.id}
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
    ),
    [tabNumber]
  );

  return (
    props.Tabs.length > 0 && (
      <div className="tabs__menu">
        {menuHeader}
        <div className="tabs__menu__content">{props.Tabs[tabNumber].content}</div>
      </div>
    )
  );
};

export default TabsMenu;
