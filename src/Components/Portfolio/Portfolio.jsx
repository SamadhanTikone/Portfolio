import { useContext } from "react"
import { Theme } from "../Context/Context"
import styles from "./Portfolio.module.css"


export default function Portfolio() {

  const { theme } = useContext(Theme)
  return (
    <div className={`${theme ? "bg-[#222831] text-white" : "bg-white text-black"} h-full`}>

      <div className="flex flex-col justify-center items-center md:px-24 md:py-12 p-4">


        <div className="flex md:flex-row flex-col">
          <img src="./Website Creator-pana.svg" alt="" className="md:w-[50%] w-full shadow-xl" />

          <div className="mx-4">

            <h2 className="md:text-3xl text-2xl font-bold uppercase md:mb-12 my-4"> <span>My</span> Projects</h2>

            <p className="md:text-[20px] text-md leading-loose">Explore a curated collection of projects showcasing my technical expertise, problem-solving skills, and creativity. These projects highlight my experience in building scalable web applications, user-friendly interfaces, and efficient back-end systems. Each project is a reflection of my commitment to delivering high-quality solutions while leveraging modern technologies like React, Java, Spring Boot, and more. Dive in to see my work in action!</p>
          </div>
        </div>


        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8">

          



          

            <div className={`overflow-hidden cursor-pointer relative w-full rounded-lg ${styles.card} `}>
              <img src="./Hotel.png" alt="" className=" transition-all duration-700 overflow-hidden" />

              <div className={` md:h-20 h-10 w-full bottom-0 absolute box-border ${styles.intro} bg-black bg-opacity-80 text-white`}>
                <h2 className="md:text-3xl md:p-4 font-bold">Hotel Kings Garden </h2>
                <p className="md:p-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sequi voluptas molestiae vitae quasi ex cum animi totam ab quas nesciunt pariatur, consequuntur corporis dolore ipsa doloremque expedita quos magnam molestias alias, accusamus cumque? Dicta non laudantium quia culpa modi dolores, doloremque ipsa voluptatibus placeat voluptate! Quisquam similique obcaecati, possimus officia est id inventore? </p>

                <button className="bg-red-500 mx-2 px-4 py-2 rounded-lg my-4">See Project</button>
              </div>
            </div>

            <div className="bg-green-500 rounded-lg">

            </div>

            

        

        </div>

      </div>


    </div>
  )
}

