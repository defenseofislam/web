// src/components/Navbar.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Typography, Grid, Drawer, Button } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import IslamicIcon from "../assets/islam.png";
import ChristianityIcon from "../assets/christianity.png";
import JudaismIcon from "../assets/judaism.jpg";
import AtheismIcon from "../assets/atheism.jpeg";
import AgnosticismIcon from "../assets/agnosticism-4163376-3448916.png";
import DarwinismIcon from "../assets/darwin.png";
import HinduismIcon from "../assets/pngtree-hindu-om-symbol-vector-icon-png-image_1872496.jpg";

const { Header } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

const Navbar = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: (
        <Link to="/" onClick={() => setDrawerVisible(false)}>
          Home
        </Link>
      ),
    },
    {
      key: "2",
      icon: <InfoCircleOutlined />,
      label: (
        <Link to="/about" onClick={() => setDrawerVisible(false)}>
          About
        </Link>
      ),
    },
    {
      key: "3",
      icon: (
        <img
          src={IslamicIcon}
          alt="Placeholder"
          style={{ width: 32, height: 32, position: "relative", top: 8 }}
        />
      ),
      label: (
        <Link to="/islam" onClick={() => setDrawerVisible(false)}>
          Islam
        </Link>
      ),
    },
    {
      key: "3.1",
      icon: (
        <img
          src={HinduismIcon}
          alt="Placeholder"
          style={{ width: 32, height: 32, position: "relative", top: 8 }}
        />
      ),
      label: (
        <Link to="/hinduism" onClick={() => setDrawerVisible(false)}>
          Hinduism
        </Link>
      ),
    },
    {
      key: "4",
      icon: (
        <img
          src={ChristianityIcon}
          alt="Placeholder"
          style={{ width: 32, height: 32, position: "relative", top: 8 }}
        />
      ),
      label: (
        <Link to="/christianity" onClick={() => setDrawerVisible(false)}>
          Christianity
        </Link>
      ),
    },
    {
      key: "5",
      icon: (
        <img
          src={JudaismIcon}
          alt="Placeholder"
          style={{ width: 32, height: 32, position: "relative", top: 8 }}
        />
      ),
      label: (
        <Link to="/judaism" onClick={() => setDrawerVisible(false)}>
          Judaism
        </Link>
      ),
    },
    {
      key: "6",
      icon: (
        <img
          src={AtheismIcon}
          alt="Placeholder"
          style={{ width: 32, height: 32, position: "relative", top: 8 }}
        />
      ),
      label: (
        <Link to="/atheism" onClick={() => setDrawerVisible(false)}>
          Atheism
        </Link>
      ),
    },
    {
      key: "7",
      icon: (
        <img
          src={AgnosticismIcon}
          alt="Placeholder"
          style={{ width: 32, height: 32, position: "relative", top: 8 }}
        />
      ),
      label: (
        <Link to="/agnosticism" onClick={() => setDrawerVisible(false)}>
          Agnosticism
        </Link>
      ),
    },
    {
      key: "8",
      icon: (
        <img
          src={DarwinismIcon}
          alt="Placeholder"
          style={{ width: 32, height: 32, position: "relative", top: 8 }}
        />
      ),
      label: (
        <Link to="/darwinism" onClick={() => setDrawerVisible(false)}>
          Darwinism
        </Link>
      ),
    },
  ];

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}
    >
      {/* Website Title/Logo */}
      <Link to="/" style={{ color: "inherit" }}>
        <Title
          level={3}
          style={{
            color: "white",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          Defense Of Islam
        </Title>
      </Link>

      {/* Desktop Menu */}
      {!isMobile ? (
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      ) : (
        <>
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: "20px", color: "white" }} />}
            onClick={() => setDrawerVisible(true)}
          />
          <Drawer
            title="Menu"
            placement="left"
            onClose={() => setDrawerVisible(false)}
            visible={drawerVisible}
            bodyStyle={{ padding: 0 }}
            headerStyle={{ background: "#001529", color: "white" }}
            closable={false}
            extra={
              <Button
                type="text"
                icon={<CloseOutlined style={{ color: "white" }} />}
                onClick={() => setDrawerVisible(false)}
              />
            }
          >
            <Menu
              theme="dark"
              mode="vertical"
              items={menuItems}
              style={{ height: "100%", borderRight: 0 }}
            />
          </Drawer>
        </>
      )}
    </Header>
  );
};

export default Navbar;
