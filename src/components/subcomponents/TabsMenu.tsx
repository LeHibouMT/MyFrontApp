import { useEffect, useState } from "react";

export interface TabInterface<K extends string | number = string> {
  id: K;
  title: string;
  content: React.ReactNode;
}

/**
 * This is a menu component with multiple tabs.
 * @param tabs Array of tabs, each tab should have a title and a content.
 * @param initialTab Optional initial tab.
 * @param onTabChange Optional function called after changing tab.
 * @returns The component.
 */
const TabsMenu: React.FC<{
  tabs: TabInterface[];
  initialTab?: number;
  onTabChange?: (tab: TabInterface) => void;
}> = (props) => {
  const [tabNumber, setTabNumber] = useState<number>(props.initialTab && props.initialTab > 0 ? props.initialTab : 0);

  useEffect(() => {
    setTabNumber(props.initialTab && props.initialTab > 0 ? props.initialTab : 0);
  }, [props.initialTab]);

  return (
    props.tabs.length && (
      <div className="tabs__menu">
        <div className="tabs__menu__header">
          {props.tabs.map((tab, index) => (
            <div
              id={tab.id}
              className={`tab--${tabNumber === index ? "active" : "inactive"}`}
              onClick={() => {
                setTabNumber(index);
                props.onTabChange?.(tab);
              }}
              key={index}>
              {tab.title}
            </div>
          ))}
        </div>
        <div className="tabs__menu__content">{props.tabs[tabNumber].content}</div>
      </div>
    )
  );
};

export default TabsMenu;
