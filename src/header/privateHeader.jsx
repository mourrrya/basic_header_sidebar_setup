import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import cookie from "js-cookie";
import React, { useState } from "react";
import { Link, Route, useHistory, useLocation } from "react-router-dom";
import useWindowDimensions from "../Hooks/WindowDimensions";
import homeIcon from "../assets/img/sideBarIcon/homeIcon.svg";
import campusMarketingIcon from "../assets/img/sideBarIcon/campusMarketingIcon.svg";
import editProfileIcon from "../assets/img/sideBarIcon/editProfileIcon.svg";
import gigIcon from "../assets/img/sideBarIcon/gigIcon.svg";
import logoutIcon from "../assets/img/sideBarIcon/logoutIcon.svg";

const { Header, Sider, Content } = Layout;

const projectMainLink = [
  { name: "Dashboard", link: "/dashboard", img: homeIcon },
  { name: "Start Test", link: "/startTest", img: editProfileIcon },
  { name: "Survey", link: "/survey", img: gigIcon },
];

const headerData = {
  firstName: "Anil",
  lastName: "Kumar",
  companyName: "www.anil.com",
  email: "anil@gmail.com",
};

export default function PrivateHeader({ component: Component, ...rest }) {
  const history = useHistory();
  const location = useLocation();
  const { width } = useWindowDimensions();
  const [collapsed, setCollapsed] = useState(width > 768 ? false : true);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    cookie.remove("adminToken");
    history.push("/");
  };

  const selectedKey = () => {
    console.log(location.pathname.toString().split("/")[1]);
    switch (location.pathname.toString().split("/")[1]) {
      case "startTest": {
        return ["1"];
      }
      case "internships": {
        return ["2"];
      }
      case "survey": {
        return ["3"];
      }
      default: {
        return ["0"];
      }
    }
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={width < 768 ? 0 : 80}
        width={240}
      >
        {!collapsed && (
          <div className="company-avatar-block">
            <div className="company-avatar">
              <img src="" alt="logo" />
            </div>
            <h3 className="company-name">{headerData.companyName}</h3>
            <h5 className="company-mail-address">{headerData.email}</h5>
          </div>
        )}

        <Menu theme="dark" mode="inline" selectedKeys={selectedKey()}>
          {projectMainLink.map((navBarLink, index) => {
            return (
              <Menu.Item key={index}>
                <Link to={navBarLink.link}>
                  <span className="anticon">
                    <img src={navBarLink.img} alt="" className="" />
                  </span>
                  <span>{navBarLink.name}</span>
                </Link>
              </Menu.Item>
            );
          })}
          <Menu.Item key="" onClick={handleLogout}>
            <span className="anticon">
              <img src={logoutIcon} alt="" className="" />
            </span>
            <span>Logout</span>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Content>
          <Header className="site-layout-background" style={{ width: "100%" }}>
            <>
              {collapsed ? (
                <MenuUnfoldOutlined
                  onClick={handleToggle}
                  className="trigger"
                />
              ) : (
                <MenuFoldOutlined onClick={handleToggle} className="trigger" />
              )}
              <div className="header-links">
                <div className="header-avatar-block">
                  <div className="avatar-on-header">
                    {headerData.firstName.toUpperCase()}
                  </div>
                  <span className="avatar-name">{`${headerData.firstName} ${headerData.lastName}`}</span>
                </div>
              </div>
            </>
          </Header>
          <div className="site-layout-background site-content">
            <Route
              {...rest}
              component={(props) => (
                <>
                  <Component {...props} />
                </>
              )}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
