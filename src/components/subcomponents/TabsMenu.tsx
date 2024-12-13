import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface TabInterface<K extends string | number = string> {
  id: K;
  title: string;
  content: React.ReactNode;
}

export interface TabInterfaceLink<K extends string | number = string> extends TabInterface<K> {
  path: string;
}

interface TabProps<TabType extends TabInterface | TabInterfaceLink> {
  tabs: TabType[];
  initialTab?: number;
  onTabChange?: (tab: TabType) => boolean;
}

/**
 * This is a generic menu component with multiple tabs.
 * @param tabs Array of tabs, each tab should have a title and a content.
 * @param initialTab Optional initial tab.
 * @param onTabChange Optional function called after trying to change tab, return a boolean, true if the tab should change.
 * @returns The component.
 */
function TabsMenu<T extends TabInterface | TabInterfaceLink>(props: TabProps<T>): JSX.Element {
  const navigate = useNavigate();
  const [tabNumber, setTabNumber] = useState<number>(props.initialTab && props.initialTab > 0 ? props.initialTab : 0);

  useEffect(() => {
    setTabNumber(props.initialTab && props.initialTab > 0 ? props.initialTab : 0);
  }, [props.initialTab]);

  return (
    <div className="tabs__menu">
      <div className="tabs__menu__header">
        {props.tabs.map((tab, index) => (
          <div
            id={tab.id}
            className={`tab--${tabNumber === index ? "active" : "inactive"}`}
            onClick={() => {
              if (!props.onTabChange || props.onTabChange?.(tab)) {
                if ("path" in tab) {
                  navigate(tab.path);
                } else {
                  setTabNumber(index);
                }
              }
            }}
            key={index}>
            <span className="tab__title">{tab.title}</span>
          </div>
        ))}
      </div>
      <div className="tabs__menu__content">{props.tabs[tabNumber].content}</div>
    </div>
  );
}

export default TabsMenu;
