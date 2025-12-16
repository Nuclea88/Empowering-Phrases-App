import { Outlet } from "react-router"
import {Navbar} from "../components/nav/Navbar"

const Layout = () => {
  return (
    <>
      <nav><Navbar/></nav>
      <main><Outlet/></main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
