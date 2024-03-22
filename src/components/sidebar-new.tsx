"use client";
import {
  AlertCircle,
  ChevronFirst,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
} from "lucide-react";
import React, { ReactNode, createContext, useContext, useState } from "react";
import SidebarItems from "./sidebaritems";

export const SidebarContext = createContext(false);

export default function SidebarNew(children: ReactNode) {
  const [isCollapse, setIsCollapse] = useState(false);

  const collapseAction = () => setIsCollapse(!isCollapse);

  return (
    <aside className="h-screen bg-red-100">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        {/* Logo Section */}
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              !isCollapse ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            onClick={collapseAction}
          >
            {isCollapse ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>
        {/* List Menu */}
        <SidebarContext.Provider value={isCollapse}>
          <SidebarItems
            datas={[
              {
                active: true,
                icon: AlertCircle,
              },
            ]}
          />
        </SidebarContext.Provider>
        {/* Account Section */}
        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${
                !isCollapse ? "w-52 ml-3" : "w-0"
              }
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}
