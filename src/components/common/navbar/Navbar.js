import React, { useState } from "react"
import NavbarStyles from "./navbar-styles"
import { Drawer, Menu, Row, Col, Space } from "antd"
import { Link } from "gatsby"
import Logo from "../../../images/logo.png"
import DrawerIcon from "../../../images/drawer.png"
import Pdf from "../../../images/crypto.pdf"

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const navLinks = [
    {
      id: 1,
      value: "Home",
    },
    {
      id: 2,
      value: "GAME",
    },
    {
      id: 3,
      value: "LITE PAPER",
    },
    {
      id: 4,
      value: "TEAM",
    },
    {
      id: 5,
      value: "NFT",
    },
  ]

  const viewPdf = () => {
    window.open(Pdf)
  }

  return (
    <NavbarStyles>
      <Row justify="center">
        <Col span={22}>
          <Row align="middle" className="desktop-menu">
            <Col md={3} lg={3} xl={3} xxl={3}>
              <Link to="/">
                <img src={Logo} alt="logo" className="logo" />
              </Link>
            </Col>
            <Col md={15} lg={16} xl={16} xxl={17}>
              <Space size={50}>
                {navLinks.map(item => (
                  <React.Fragment key={item.id}>
                    {/* <Link to={item.value}> */}
                    {item.value === "LITE PAPER" ? (
                      <p onClick={viewPdf}>{item.value}</p>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </React.Fragment>
                ))}
              </Space>
            </Col>

            <Col md={6} lg={5} xl={5} xxl={4}>
              <Link to="#">
                <button className="btn-connect">CONNECT</button>
              </Link>
            </Col>
          </Row>

          <div className="mobile-menu">
            <Row>
              <Col span={8}>
                <Link to="/">
                  <img src={Logo} alt="logo" className="logo" />
                </Link>
              </Col>
              <Col span={8} offset={8}>
                <img
                  src={DrawerIcon}
                  alt="drawer"
                  className="drawer-icon"
                  onClick={() => showDrawer()}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Drawer
        title="Battle of Crypto"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        className="custom-drawer"
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          onClick={() => onClose()}
        >
          {navLinks.map(item => (
            <Menu.Item key={item.id}>
              {/* <Link to={item.value}> */}
              <a>{item.value}</a>
              {/* </Link> */}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </NavbarStyles>
  )
}

export default Navbar
