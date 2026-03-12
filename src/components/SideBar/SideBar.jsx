import React from "react";
import "./SideBar.css";
import avatar from "../../assets/avatar.png";

function SideBar() {
  return (
    <aside className="sidebar">
      <img src={avatar} alt="User avatar" className="sidebar__avatar" />
      <h2 className="sidebar__username">Terrence Tegegne</h2>
    </aside>
  );
}

export default SideBar;
