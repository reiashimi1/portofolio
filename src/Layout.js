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
import useWindowDimensions from "./hooks/useWindowDimensions";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const { width } = useWindowDimensions();

  const location = useLocation();

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  useEffect(() => {
    if (width < 768) {
      setMenuCollapse(true);
    }
  }, [width]);

  return (
    <div className="flex h-full bg-gray-300">
      <div className="font-bold h-auto">
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
                active={location.pathname === "/"}
              >
                <Link to="/">
                  <div
                    className={`${
                      location.pathname === "/" ? "text-indigo-500" : ""
                    }`}
                  >
                    HOME
                  </div>
                </Link>
              </MenuItem>
              <MenuItem
                icon={<Books />}
                active={location.pathname === "/education"}
              >
                <Link to="/education">
                  <div
                    className={`${
                      location.pathname === "/education"
                        ? "text-indigo-500"
                        : ""
                    }`}
                  >
                    EDUCATION
                  </div>
                </Link>
              </MenuItem>
              <MenuItem
                icon={<Mountain />}
                active={location.pathname === "/experience"}
              >
                <Link to="/experience">
                  <div
                    className={`${
                      location.pathname === "/experience"
                        ? "text-indigo-500"
                        : ""
                    }`}
                  >
                    EXPERIENCE
                  </div>
                </Link>
              </MenuItem>
              <MenuItem
                icon={<Wall />}
                active={location.pathname === "/skills"}
              >
                <Link to="/skills">
                  <div
                    className={`${
                      location.pathname === "/skills" ? "text-indigo-500" : ""
                    }`}
                  >
                    SKILLS
                  </div>
                </Link>
              </MenuItem>
              <MenuItem
                icon={<PhoneCall />}
                active={location.pathname === "/contact"}
              >
                <Link to="/contact">
                  <div
                    className={`${
                      location.pathname === "/contact" ? "text-indigo-500" : ""
                    }`}
                  >
                    CONTACT ME
                  </div>
                </Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <div
              className={`py-5 flex justify-center ${
                menuCollapse ? "" : "border border-gray-500"
              }`}
            >
              Copyright @2023
            </div>
          </SidebarFooter>
        </ProSidebar>
      </div>
      <div className="w-screen h-screen">{children}</div>
    </div>
  );
};

export default Layout;
