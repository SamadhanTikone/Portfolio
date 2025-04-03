import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
// import BackGround from "../BackGround/BackGround";


export default function Layout() {
  return (
    <div>
      {/* <BackGround/> */}
      
      <NavBar/>
      <Outlet/>
      <Footer/>

    </div>
  )
}
