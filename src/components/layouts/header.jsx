import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "Home",
      icon: <MailOutlined />,
    },
    {
        label: <Link to={"/user"}>Users</Link>,
        key: "user",
        icon: <MailOutlined />,
      },
    {
      label: "Welcom",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          label: <Link to={"/login"}>Đăng Nhập</Link>,
          key: "login",
        },
        {
          label: "Đăng xuất",
          key: "logout",
        },
      ],
    },
  ];

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
