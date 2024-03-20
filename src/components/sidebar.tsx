"use client";
import React, { useState } from "react";
import { Nav } from "./ui/nav";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
 
  return (
    <div>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Social",
            label: "972",
            icon: Users2,
            variant: "ghost",
            href: "/"
          },
          {
            title: "Updates",
            label: "342",
            icon: AlertCircle,
            variant: "ghost",
            href: "/users"
          },
          {
            title: "Forums",
            label: "128",
            icon: MessagesSquare,
            variant: "ghost",
            href: "/dfsdf"
          },
          {
            title: "Shopping",
            label: "8",
            icon: ShoppingCart,
            variant: "ghost",
            href: "/sfdsf"
          },
          {
            title: "Promotions",
            label: "21",
            icon: Archive,
            variant: "ghost",
            href: "/dsfdsf"
          },
        ]}
      />
    </div>
  );
}
