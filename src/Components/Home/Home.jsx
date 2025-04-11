import { useContext } from "react"
import { Theme } from "../Context/Context"
import Button from '@mui/material/Button';
import Connect from "./Connect"
// import Sliders from "../Sliders/Sliders"
// import BackGround from "../BackGround/BackGround"

import  "./Home.css"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useNavigate } from "react-router-dom";
import Skills from "./Skills";




export default function Home() {

  const navigate = useNavigate();

  const handlePortfolio =() => {
    navigate("/portfolio")
  }

  const handleResume =() => {
    navigate("/resume")
  }

  useGSAP(()=>{

    gsap.from(".image-1",{
      x:-100,
      delay:0.5,
      opacity:0,
    }

    )
  })
  useGSAP(()=>{

    gsap.from(".p",{
      x:100,
    // duration:.8,
    delay:0.5,
    stagger:.2,
    opacity:0
    }

    )
  })

  const{theme} = useContext(Theme)
  return (
    <>
   
    <div className={`${ theme ? "bg-[#222831] text-white" : " bg-white text-[#222831]"} h-full z-10 pb-24` }>

        <div className="grid sm:grid-cols-2 items-center grid-cols-1">


                <div className="lg:ml-24 md:mt-24 sm:ml-1 ml-12 mt-12 name z-0">

                  <p className="md:text-[60px] font-bold sm:text-[42px] text-[32px] p uppercase  ">tikone</p>
                  <p className="md:text-[82px] sm:text-[60px] text-[40px] p uppercase text-[#FF6500] sam font-semibold block sm:-mt-10 -mt-5">samadhan</p>
                  <p className="md:tracking-[15px] tracking-[6px] ml-2 sm:text-[16px] text-[10px] p uppercase font-semibold sm:-mt-4" >Front-End Developer</p>
                  <div className="p">
                  <Button variant="outlined" sx={{margin:"8px 8px ",color:"#FF6500", borderColor:"#FF6500"}} onClick={handleResume} >Resume </Button>
                  <Button variant="outlined" sx={{margin:"8px 8px",color:"#FF6500", borderColor:"#FF6500"}} onClick={handlePortfolio} >Portfolio </Button>
                  </div>
                  <Connect />
                </div>

                <div className="flex justify-center items-center mt-10 image-1">
  <div className="relative w-[450px] h-[450px] rounded-full flex items-center justify-center before:absolute before:inset-0 before:rounded-full before:animate-spin-slow before:border-[6px] before:border-transparent before:border-t-orange-500 before:border-r-orange-500 before:z-0">
    
    {/* Static inner image */}
    <div className="relative w-[420px]  h-[420px] rounded-full hover:overflow-visible overflow-hidden z-10 border-4  transition-all duration-500 hover:scale-105">
      <img
        src="./Resume/sam-modified.png"
        alt="Profile"
        className="w-full h-full object-cover cursor-pointer transition-transform duration-700 hover:scale-110"
      />
    </div>
  </div>
</div>


               
              
        </div>
   

{/* <Sliders/> */}
       <Skills/>
    </div>
    </>
  )
}
