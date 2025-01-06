import { useContext } from "react"
import { Theme } from "../Context/Context"
import Project from "./Project"



export default function Portfolio() {

  const { theme } = useContext(Theme)
  return (
    <div className={`${theme ? "bg-[#222831] text-white" : "bg-white text-black"} h-full`}>

      <div className="flex flex-col justify-center items-center md:px-24 md:py-12 p-4">


        <div className="flex md:flex-row flex-col">
          <img src="./Website Creator-pana.svg" alt="" className="md:w-[50%] w-full shadow-xl" />

          <div className="mx-4">

            <h2 className="md:text-3xl text-2xl font-bold uppercase md:mb-12 my-4"> <span>My</span> Projects</h2>

            <p className="lg:text-[20px]  text-md leading-loose">Explore a curated collection of projects showcasing my
              <span className=" text-[#FF6500]"> technical expertise, problem-solving skills, and creativity</span>. These projects highlight my experience in building scalable web applications, user-friendly interfaces, and efficient back-end systems. Each project is a reflection of my commitment to delivering high-quality solutions while leveraging modern <span className=" text-[#FF6500]">
                technologies like React, Java, Spring Boot, and more.</span> Dive in to see my work in action!</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 mt-8  md:gap-8">

          <Project 
                  url={"./hotel blue.png"}
                  title={" Hotel Kings Garden"}
                  discription={" Explore a curated collection of projects showcasing my technical expertise, problem-solving skills, and creativity. These projects highlight my experience in building scalable web applications, user-friendly interfaces, and efficient back-end systems. Each project is a reflection of my commitment to delivering high-quality solutions while leveraging modern   technologies like React, Java, Spring Boot, and more. "}
                />

          <Project 
                  url={"./landing page.png"}
                  title={" Shoes Landing Page"}
                  discription={" Explore a curated collection of projects showcasing my technical expertise, problem-solving skills, and creativity. These projects highlight my experience in building scalable web applications, user-friendly interfaces, and efficient back-end systems. Each project is a reflection of my commitment to delivering high-quality solutions while leveraging modern   technologies like React, Java, Spring Boot, and more. "}
                />

          <Project 
                  url={"./hotel blue.png"}
                  title={" Hotel Kings Garden"}
                  discription={" Explore a curated collection of projects showcasing my technical expertise, problem-solving skills, and creativity. These projects highlight my experience in building scalable web applications, user-friendly interfaces, and efficient back-end systems. Each project is a reflection of my commitment to delivering high-quality solutions while leveraging modern   technologies like React, Java, Spring Boot, and more. "}
                />
        </div>


      </div>


    </div>
  )
}

