import React, { useState } from "react";
import Header from "../Header/Page";
import Sidebar from "../Sidebar/Page";
import Home from "../../Content/Home/Page";
import '../../../../public/scss/main.scss';
import "../../../../public/scss/main.scss";
const page = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <div>
      <Header onToggle={toggleSidebar}></Header>
      <div className="d-flex w-100 margintop">
        {sidebarVisible && <Sidebar />}
        <Home></Home>
      </div>
    </div>
  );
};

export default page;
