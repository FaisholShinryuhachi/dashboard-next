import React, { useContext } from "react";
import { SidebarContext } from "./sidebar-new";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  datas: {
    active: boolean;
    icon: LucideIcon;
  }[];
}

export default function SidebarItems({ datas }: SidebarItemProps) {
  const isCollapse = useContext(SidebarContext);

  return (
    <ul className="flex-1 px-3">
      {datas.map((data, index) => (
        <li
          key={index}
          className="relative flex items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group"
        >
          <data.icon />
        </li>
      ))}
    </ul>
    //     <li
    //       className={`
    //   relative flex items-center py-2 px-3 my-1
    //   font-medium rounded-md cursor-pointer
    //   transition-colors group
    //   ${
    //     data.active
    //       ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
    //       : "hover:bg-indigo-50 text-gray-600"
    //   }
    // `}
    //     ></li>
  );
}
