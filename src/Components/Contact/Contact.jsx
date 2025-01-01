
// import { Link } from "react-router-dom";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import XIcon from '@mui/icons-material/X';
import { useGSAP } from "@gsap/react";
import styles from "./Contact.module.css"
import Button from '@mui/material/Button';

import gsap from "gsap";
import { useContext } from "react";
import { Theme } from "../Context/Context";



export default function Contact() {

  useGSAP(() => {

    gsap.from(".animate", {
        y: 200,
        delay: 0.5,
        opacity: 0,
        stagger: 0.2,


      })

  })

  const {theme} = useContext(Theme);
  return (
    <div className={`${theme? "bg-[#222831] text-white" : "bg-white text-black"}`}>

      <h2 className="text-center text-3xl font-semibold pt-8"> Let&apos;s Connect</h2>

      <div className="flex  flex-col j" >


        {/* <div className="flex  justify-around items-center w-[60%]">
      <img src="./Social media-bro.svg" alt="" className="w-[350px] " /> 

    
    
     <div className="flex flex-col gap-4  justify-center ">

<p className="hover:scale-150 transition-all duration-25 scale-125">   <Link> <LinkedInIcon/> LinkedIn </Link></p>
   <p className="hover:scale-150 transition-all duration-25 scale-125">
   <Link> <InstagramIcon/> Instagram</Link>
   </p>
    <p className="hover:scale-150 transition-all duration-25 scale-125">
    <Link> <GitHubIcon/> GitHub </Link>
    </p>
    
    <p className="hover:scale-150 transition-all duration-25 scale-125">
    <Link> <XIcon/> Twitter</Link>
    </p>

   </div>

     
      </div> */}

        <div className={`border m-12 rounded-lg flex ${styles.div}`}>
          <img src="./Contact us-rafiki (1).svg" alt="" className="w-[45%] animate" />
          <form action="" className="w-[40%] border border-[#FF6500] animate p-6 m-10 rounded-lg">

            <h2 className="text-3xl font-semibold text-center my-4 underline"> Contact Me</h2>

            <div className="flex w-[100%] gap-4">


              <div className="flex flex-col w-[50%]">
                <label className="" htmlFor="Fname">First Name:</label>
                <input type="text" id="Fname" className={ `${theme ? "bg-gray-300 text-black" : "bg-[#222831] text-white"}`} />
              </div>
              <div>
                <label htmlFor="Lname">Last Name:</label>
                <input type="text" id="Lname" className={ `${theme ? "bg-gray-300 text-black" : "bg-[#222831] text-white"}`}  />
              </div>
            </div>


            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className={ `${theme ? "bg-gray-300 text-black" : "bg-[#222831] text-white"}`}/>
            </div>

            <div>
              <label htmlFor="mobile">Mobile No:</label>
              <input type="number" id="mobile" className={ `${theme ? "bg-gray-300 text-black" : "bg-[#222831] text-white"}`} />
            </div>

            <div className="flex flex-col">
              <label htmlFor="description">Description:</label>
              <textarea name="description" id="description" rows={8} className={ `${theme ? "bg-gray-300 text-black" : "bg-[#222831] text-white"}`} ></textarea>
            </div>

            <Button variant="contained" sx={{ bgcolor: "#FF6500" }}>Submit</Button>

          </form>
        </div>

      </div>

    </div>
  )
}
