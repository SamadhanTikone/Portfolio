import {  NavLink, useNavigate,  } from "react-router-dom"
import Button from '@mui/material/Button';
import { useContext, useState } from "react";
import { Theme } from "../Context/Context";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


import Menu from "../Home/Menu";

// import { useGSAP } from "@gsap/react"
// import gsap from "gsap"

export default function NavBar() {


  // useGSAP(()=>{

  //   gsap.from(".link",{
  //     y:-200,
  //     stagger: 0.1,
  
  //   }

  //   )
  // })
  // useGSAP(()=>{

  //   gsap.from(".nav",{
  //     y:-200,
  //     zIndex:100,
    
     
  //   }

  //   )
  // })



    const{theme , setTheme} = useContext(Theme);
    const[menuIsOpen , setMenuIsOpen] = useState(false)
    const[close , setClose] = useState(false)
    const navigate = useNavigate();

    const handleConnect =()=>{
      navigate("/contact")
    }

function toggleTheme (){

    setTheme(!theme)
 
}



function toggleClose (){

    if(menuIsOpen && close){

        setMenuIsOpen(!menuIsOpen)
       
    } 
    else{
        setClose(!close)
    }
   


}


  return (
    <div className={` ${ theme ? "bg-[#222831] text-white" : " bg-white text-[#222831]"} flex md:justify-around justify-between p-6 nav relative `}>
     

<div className="flex justify-center flex-col items-center cursor-pointer" onClick={()=> navigate("/")}>
<img src="./logo.png" alt="" className="md:w-24 w-16" />

</div>

      <ul className={` ${  menuIsOpen   ? `  hidden  ${ theme ? "bg-white text-black opacity-100": " bg-[#222831] text-white" } ` :"hidden " }  flex md:flex md:justify-around  md:flex-row items-center  gap-10  uppercase font-semibold `}>
        <NavLink to={"/"} onClick={toggleClose} className={({isActive})=> isActive ? "text-[#FF6500]  " : "null"}>Home</NavLink>
        <NavLink to={"/about"} onClick={toggleClose} className={({isActive})=> isActive ? "text-[#FF6500]  " :"null"}>About</NavLink>
        <NavLink to={"/resume"} onClick={toggleClose} className={({isActive})=> isActive ? "text-[#FF6500]  " : "null"}>Resume</NavLink>
        <NavLink to={"/portfolio"} onClick={toggleClose} className={({isActive})=> isActive ? "text-[#FF6500]  " : "null"}>Portfolio</NavLink>
        <NavLink to={"/contact"} onClick={toggleClose} className={({isActive})=> isActive ? "text-[#FF6500]  " : "null"}>Connect</NavLink>    


       
      </ul>

    
      {/* <div className=" sm:hidden" onClick={toggleMenu}>
           { menuIsOpen ?  <CloseIcon sx={{fontSize:"28px"}}/> : <MenuIcon sx={{fontSize:"28px"}}/> }
        </div> */}

<div className="flex md:justify-between justify-end items-center md:gap-4 w-auto">

<div className="md:block hidden">
<Button variant="outlined" sx={{color:"#FF6500", borderColor:"#FF6500",height:"45px"}}  onClick={handleConnect}> Let&apos;s Connect</Button>

</div>

<div className="md:border rounded-lg border-[#FF6500]">

<Button 

            variant="outlined"
            sx={{color:"#FF6500", border:"none",height:"45px"}} 
            onClick={toggleTheme}
            
            > { theme ? <DarkModeIcon/> : <LightModeIcon/> }</Button>

</div>

 <div className="md:hidden block"> <Menu /> </div>
</div>



    </div>
  )
}
