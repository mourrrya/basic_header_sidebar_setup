import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import cookie from "js-cookie";
import React, { useState } from "react";
import { Link, Route, useHistory, useLocation } from "react-router-dom";
import useWindowDimensions from "../Hooks/WindowDimensions";

const { Header, Sider, Content } = Layout;

const projectMainLink = [
  { name: "Dashboard", link: "/dashboard" },
  { name: "Gigs", link: "/gigs" },
  { name: "Internships", link: "/internships" },
  { name: "Campus Marketing", link: "/campus_marketing" },
  { name: "Student Offers", link: "student_offers" },
  { name: "Student Verification", link: "student_verification" },
  { name: "Support", link: "support" },
  { name: "Payments", link: "payments" },
  { name: "Notifications", link: "notifications" },
];

const headerData = {
  firstName: "Shivam",
  lastName: "Malhotra",
  companyName: "www.pracify.com",
  email: "shivam@gmail.com",
};

export default function PrivateHeader({ component: Component, ...rest }) {
  const history = useHistory();
  const location = useLocation();
  const { width, height } = useWindowDimensions();
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
      case "gigs": {
        return ["1"];
      }
      case "internships": {
        return ["2"];
      }
      case "campus_marketing": {
        return ["3"];
      }
      case "student_offers": {
        return ["4"];
      }
      case "student_verification": {
        return ["5"];
      }
      case "support": {
        return ["6"];
      }
      case "payments": {
        return ["7"];
      }
      case "notifications": {
        return ["8"];
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
                  <span>{navBarLink.name}</span>
                </Link>
              </Menu.Item>
            );
          })}
          <Menu.Item key="" onClick={handleLogout}>
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
