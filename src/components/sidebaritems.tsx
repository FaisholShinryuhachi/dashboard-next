import React, { useContext } from "react";
import { SidebarContext } from "./sidebar-new";

interface SidebarItemProps {
  data: {
    active: boolean;
  }[];
}

export default function SidebarItems({ data }: SidebarItemProps) {
  const isCollapse = useContext(SidebarContext);

  return (
    <li
      className={`
  relative flex items-center py-2 px-3 my-1
  font-medium rounded-md cursor-pointer
  transition-colors group
  ${
    data.active
      ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
      : "hover:bg-indigo-50 text-gray-600"
  }
`}
    ></li>
  );
}
