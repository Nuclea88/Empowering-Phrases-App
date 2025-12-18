import { Link } from "react-router"

const Navbar = () => {
  return (
    <>

        <button className="button-nav"><Link to= "/">Home</Link></button>
        <button className="button-nav"><Link to= "/create">Create your Phrase</Link></button>
        <button className="button-nav"><Link to= "/about-us">About Us</Link></button>
      
    </>
  )
}

export default Navbar
