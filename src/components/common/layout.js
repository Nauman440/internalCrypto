import React from "react"
import Footer from "./footer/footer"
import BaseLayout from "./global-styles"
// import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => (
  <BaseLayout>
    <main>{children}</main>
    <Footer />
  </BaseLayout>
)

export default Layout
