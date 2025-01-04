import { useContext } from "react"
import { Theme } from "../Context/Context"
import styles from "./Portfolio.module.css"
import InsertLinkIcon from '@mui/icons-material/InsertLink';


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







          <div className={`overflow-hidden cursor-pointer h-60 md:h-auto relative w-full shadow-xl rounded-lg ${styles.card} `}>
            <img src="./hotel blue.png" alt="" className=" transition-all duration-700 overflow-hidden" />

            <div className={` md:h-20 h-10 w-full bottom-0 absolute box-border ${styles.intro} bg-black bg-opacity-80 text-white`}>
              <h2 className="md:text-3xl md:p-4 mx-2 font-bold">Hotel Kings Garden </h2>
              <button className="bg-red-500 mx-2 px-4 md:py-2 py-1 text-sm rounded-lg my-4"> </button>
            </div>
          </div>

          <div className="flex mt-4 md:mt-0 ">
            <p className="w-2 h-full rounded-lg bg-orange-600 inline-block"> <InsertLinkIcon/> </p>
            <div className="ml-4 ">

            <h2 className="inline text-xl md:text-2xl font-semibold underline">Hotel Kings Garden</h2>
            <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id culpa expedita enim natus dicta eius aliquid et molestias velit debitis.</p>

            <p>tech:</p>
            </div>
          </div>





        </div>

      </div>


    </div>
  )
}

