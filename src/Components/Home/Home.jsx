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
    {/* <BackGround/> */}
    {/* <Particles/> */}
    <div className={`${ theme ? "bg-[#222831] text-white" : " bg-white text-[#222831]"} h-full z-10` }>

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

               
                <div>
                  <img 
                      src="./Programming-pana (1).svg"
                      className="w-full mt-4 image-1 "
                      alt="" />

                </div>
               
              
        </div>
   
{/* <Sliders/> */}
       
    </div>
    </>
  )
}
