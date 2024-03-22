"use client";
import { ChevronFirst, MoreVertical } from "lucide-react";
import React, { createContext, useContext, useState } from "react";
import SidebarItems from "./sidebaritems";

export default function SidebarNew() {
  const SidebarContext = createContext();
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <aside className="h-screen bg-red-100">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className="w-32 overflow-hidden transition-all"
            alt=""
          />
          <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            <ChevronFirst />
          </button>
        </div>
        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <SidebarContext.Provider value={isCollapse}>
            <SidebarItems />
          </SidebarContext.Provider>
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all 
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
