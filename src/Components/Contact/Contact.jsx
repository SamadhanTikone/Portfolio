
// import { Link } from "react-router-dom";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import XIcon from '@mui/icons-material/X';
import { useGSAP } from "@gsap/react";
import styles from "./Contact.module.css"
// import Button from '@mui/material/Button';

import gsap from "gsap";
import { useContext,  useState } from "react";
import { Theme } from "../Context/Context";



export default function Contact() {

  const [name , setName] = useState(null);
  const [isSubmit , setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsSubmit(true);  // Set form submission state
    console.log(name);
  };
  
  



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
 <>
   {
    isSubmit ? 
    
            <p className= {`${theme? "bg-[#222831] text-white" : "bg-white text-black"} py-24 p-8 text-xl text-center`}>✅{name}, Thanks for Connecting me.</p>
     :
    
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

      <div className={`border md:m-12 m-2 rounded-lg flex justify-center items-center lg:flex-row flex-col ${styles.div}`}>

        <img src="./Contact us-rafiki (1).svg" alt="" className="md:w-[45%] animate" />


        <form 
              action="" 
              className="lg:w-[40%] md:w-[60%] w-[80%] border border-[#FF6500] animate p-2 md:p-6 lg:m-10 m-2 rounded-lg "
              onSubmit={handleSubmit}
              >

          <h2 className="md:text-3xl text-2xl font-semibold text-center my-4 underline"> Contact Me</h2>

          <div className="flex lg:flex-row w-[100%]  md:gap-4 flex-col">


            <div className="flex flex-col  lg:w-[50%]">
              <label className="" htmlFor="Fname">First Name:</label>
              <input 
                    type="text"
                    id="Fname" 
                    className={  `${theme ? "bg-gray-300 text-black" : "bg-[#222831] text-white"}`}
                    onChange={(e)=>setName(e.target.value)}
                    required
                    />
            </div>
            <div>
              <label htmlFor="Lname">Last Name:</label>
              <input type="text" id="Lname" className={ `  ${theme ? "bg-gray-300 text-black" : "bg-[#222831] text-white"}`} required />
            </div>
          </div>


          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className={ ` ${theme ? "bg-gray-300 text-black" : "bg-[#222831] text-white"}`} required/>
          </div>

          <div>
            <label htmlFor="mobile">Mobile No:</label>
            <input type="number" id="mobile" className={ `  ${theme ? "bg-gray-300 text-black" : "bg-[#222831] text-white"} py-1`} required/>
          </div>

          <div className="flex flex-col">
            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description" rows={8} className={ ` ${styles.input} ${theme ? "bg-gray-300 text-black" : "bg-[#222831] text-white"}`} ></textarea>
          </div>

          {/* <Button variant="contained" sx={{ bgcolor: "#FF6500" }}>Submit</Button> */}
          <button className="bg-[#FF6500] px-6  py-2 m-auto hover:bg-blue-500  rounded-lg transition-all duration-200 uppercase">Submit</button>


        </form>
      </div>

    </div>

  </div>
   }
 </>
  )
}
