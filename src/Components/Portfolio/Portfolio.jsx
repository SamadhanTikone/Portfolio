import { useContext } from "react"
import { Theme } from "../Context/Context"
import Project from "./Project"
// import { useGSAP } from "@gsap/react"
// import gsap from "gsap"
// import ScrollTrigger from "gsap/ScrollTrigger"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// gsap.registerPlugin(ScrollTrigger)



export default function Portfolio() {

  // useGSAP(()=>{
  //   gsap.from(".img",{
  //     x: 200,
  //     opacity: 0,
  //     stagger: 0.5,
  //   })
  //   gsap.from(".content",{
  //     x: -200,
  //     opacity: 0,
  //     stagger: 0.5,
  //   })
  // })

  const { theme } = useContext(Theme)
  return (
    <div className={`${theme ? "bg-[#222831] text-white" : "bg-white text-black"} h-full`}>

      <div className="flex flex-col  justify-center items-center md:px-24 md:py-12 p-4">


        <div className="flex md:flex-row justify-center items-center flex-col h-[70%]">
          <img src="./Website Creator-pana.svg" alt="" className="md:w-[50%] img w-full " />

          <div className="mx-4 content">

            <h2 className="md:text-3xl text-2xl font-bold uppercase mb-12 my-4"> <span>My</span> Projects</h2>

            <p className="lg:text-[20px]  text-md leading-loose">Explore a curated collection of projects showcasing my
              <span className=" text-[#FF6500]"> technical expertise, problem-solving skills, and creativity</span>. These projects highlight my experience in building scalable web applications, user-friendly interfaces, and efficient back-end systems. Each project is a reflection of my commitment to delivering high-quality solutions while leveraging modern <span className=" text-[#FF6500]">
                technologies like React, Java, Spring Boot, and more.</span> Dive in to see my work in action!</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-8 gap-4 md:gap-8">

          <h2 className="lg:col-span-2 col-span-1 text-3xl font-semibold my-12 text-center mb-8">🚀 Explore My Tech Journey <ArrowDownwardIcon sx={{fontWeight:700 , font:"40px"}}/> </h2>

          <Project 
                  url={"./Screenshot 2025-04-03 144717.png"}
                  title={"Company Demo Website"}
                  imageURL={"https://emacron-solutions.vercel.app/"}
                  discription={" Developed a responsive hotel and food ordering website using React Router for seamless navigation, React Hooks for state management, and styled with Tailwind CSS and MUI components for a modern and intuitive user experience. "}
                  tech={" React.js, Tailwind, Responsive, MUI, Router, Context, Hooks, API"}
                />
          <Project 
                  url={"./hotel blue.png"}
                  title={" Hotel Kings Garden"}
                  imageURL={"https://hotel-kings.vercel.app/"}
                  discription={" Developed a responsive hotel and food ordering website using React Router for seamless navigation, React Hooks for state management, and styled with Tailwind CSS and MUI components for a modern and intuitive user experience. "}
                  tech={" React.js, Tailwind, Responsive, MUI, Router, Context, Hooks, API"}
                />

          <Project 
                  url={"./landing page.png"}
                  title={" Shoes Landing Page"}
                  imageURL={"https://landingpage-ten-woad.vercel.app/"}
                  discription={" Explore a curated collection of projects showcasing my technical expertise, problem-solving skills, and creativity. These projects highlight my experience in building scalable web applications, user-friendly interfaces, and efficient back-end systems. Each project is a reflection of my commitment to delivering high-quality solutions while leveraging modern   technologies like React, Java, Spring Boot, and more. "}
                  tech={" React.js, Tailwind, Responsive, MUI, Router, Context, Hooks, API"}
                />


          <Project
          url={"./company name.png"}
          title={"Company Website (Demo)"}
          imageURL={"https://blogs-app-beryl.vercel.app/"}
          discription={"Explore a curated collection of projects showcasing my technical expertise, problem-solving skills, and creativity. These projects highlight my experience in building scalable web applications, user-friendly interfaces, and efficient back-end systems. Each project is a reflection of my commitment to delivering high-quality solutions while leveraging modern   technologies like React, Java, Spring Boot, and more."}
          tech={" React.js, Tailwind, Responsive, MUI, Router, Context, Hooks, API"}
          />

          <Project 
                  url={"./Tailwind.png"}
                  title={"Tailwind Project (Responsive)"}
                  imageURL={"https://tailwind-project-pru1.vercel.app/"}
                  discription={" Explore a curated collection of projects showcasing my technical expertise, problem-solving skills, and creativity. These projects highlight my experience in building scalable web applications, user-friendly interfaces, and efficient back-end systems. Each project is a reflection of my commitment to delivering high-quality solutions while leveraging modern   technologies like React, Java, Spring Boot, and more. "}
                  tech={" React.js, Tailwind, Responsive, MUI, Router, Context, Hooks, API"}
                />
        </div>


      </div>


    </div>
  )
}

