import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import {
  LayoutSidebarLeftCollapse,
  LayoutSidebarRightCollapse,
  PhoneCall,
  LayoutList,
  Wall,
  Books,
  Mountain,
} from "tabler-icons-react";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import stars from "./images/stars.jpg";

const Layout = ({ children }) => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const location = useLocation();

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div className="flex">
      <div className="h-screen font-bold">
        <ProSidebar collapsed={menuCollapse} width={200} image={stars}>
          <SidebarHeader>
            <div
              className="flex justify-end hover:cursor-pointer hover:translate-x-0.5 py-3"
              onClick={menuIconClick}
            >
              {menuCollapse ? "Menu" : ""}
              {menuCollapse ? (
                <LayoutSidebarRightCollapse className="ml-1" />
              ) : (
                <LayoutSidebarLeftCollapse className="ml-1" />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                icon={<LayoutList />}
                active={location.pathname === "/portofolio"}
              >
                <Link to="/portofolio">Home</Link>
              </MenuItem>
              <MenuItem
                icon={<Books />}
                active={location.pathname === "/education"}
              >
                <Link to="/education">Education</Link>
              </MenuItem>
              <MenuItem
                icon={<Mountain />}
                active={location.pathname === "/experience"}
              >
                <Link to="/experience">Experience</Link>
              </MenuItem>
              <MenuItem
                icon={<Wall />}
                active={location.pathname === "/skills"}
              >
                <Link to="/skills">Skills</Link>
              </MenuItem>
              <MenuItem
                icon={<PhoneCall />}
                active={location.pathname === "/contact"}
              >
                <Link to="/contact">Contact me</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <div className="py-5 flex justify-center">Copyright @2022</div>
          </SidebarFooter>
        </ProSidebar>
      </div>
      <div className="bg-gray-200 w-screen p-5 font-mono">{children}</div>
    </div>
  );
};

export default Layout;
