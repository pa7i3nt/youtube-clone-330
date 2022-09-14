import { sideBarMenuRows } from "./sidebarData";
import { SidebarRow } from "./SidebarRow";

export const SidebarTopMenuSection2 = () => {
  return sideBarMenuRows.slice(4).map(({ Icon, text }) => {
    return <SidebarRow key={text} {...{ Icon, text }} />;
  });
};
