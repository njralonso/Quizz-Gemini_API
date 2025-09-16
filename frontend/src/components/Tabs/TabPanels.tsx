import React from "react";
import { useTabs } from "./Context/TabsContext";

export const TabPanels = ({ children }: { children: React.ReactNode }) => {
  const { active } = useTabs()
  return <div>{React.Children.toArray(children)[active]}</div>
}