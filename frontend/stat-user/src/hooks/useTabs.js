import { useState } from "react";

export default function useTabs(defaultTab) {
  const [currentTab, setCurrentTab] = useState(defaultTab || " ");

  return {
    currentTab,
    setCurrentTab,
    onChangeTab: (_event, newTab) => {
      setCurrentTab(newTab);
    },
  };
}
