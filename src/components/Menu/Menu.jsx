import { TabMenu } from "primereact/tabmenu";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function MenuNav() {
  const navigate = useNavigate();
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "Calendar",
      icon: "pi pi-fw pi-calendar",
      command: () => {
        navigate("/review");
      },
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="card">
        <TabMenu model={items} />
      </div>
    </div>
  );
}
