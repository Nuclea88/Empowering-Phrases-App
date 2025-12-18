import { Link } from "react-router"

const Navbar = () => {
  return (
    <>

        <Link to= "/">Home</Link>
        <Link to= "/create">Create your Phrase</Link>
        <Link to= "/about-us">About Us</Link>
      
    </>
  )
}

export default Navbar



