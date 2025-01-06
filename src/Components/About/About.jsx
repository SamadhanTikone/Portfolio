import { useGSAP } from '@gsap/react';
import Button from '@mui/material/Button';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../Context/Context';
gsap.registerPlugin(ScrollTrigger)


export default function About() {

  const navigate = useNavigate();

  const handleProjects =()=>{
    navigate("/portfolio")
  
  }

  const {theme} = useContext(Theme)

  useGSAP(()=>{
    gsap.from(".div",{
      x:-100,
      delay:0.5,
      opacity:0,
      stagger:0.2,
    })
    })


    useGSAP(()=>{
      gsap.from(".div1",{
        y:200,
        delay:0.5,
        opacity:0,
        stagger:0.2,
        scrollTrigger: {
          trigger: ".box", 
          start: "center bottom", 
          end: "center top  ", 
          scrub: 1,
          // markers: true, 
        },
  
      })
      return () => {
        ScrollTrigger.killAll();
      };
    })
  

  return (
    <>
    
    <div className={`md:px-24 h-full px-4 ${theme ? "bg-[#222831] text-white" : "bg-white text-black"}`}>
      
      <div>
        <h2 className="md:text-3xl text-2xl div uppercase font-semibold py-12 underline text-center">About <span className='text-[#FF6500]'>me</span> </h2> 
       <div className="flex lg:flex-row flex-col ">

       <p className="md:text-[22px] div md:mx-6  leading-loose lg:w-[50%]">
       I am currently in my final year of B.Tech in Computer Science and Engineering, where I have developed a strong understanding of a wide range of programming languages, frameworks, and technologies. I am proficient in both front-end and back-end development, with expertise in <span className='text-[#FF6500]'>HTML5, CSS3, Bootstrap, Tailwind, JavaScript, React, Redux, and React Hooks</span> to build dynamic and responsive web applications. </p>

       <img src="./final year.webp" alt="" className="w-[450px]  div mb-4" />

       </div>

<div className="flex lg:flex-row flex-col ">
  <img src="./men.jpeg" alt="" className="lg:w-[450px] lg:block hidden  mb-12 lg:-mt-12 w-[400px] div1"/>
<p className="md:text-[22px] md:mx-6 leading-loose float-right lg:w-[50%]  div1 ">
On the back-end, I have hands-on experience with Core Java, Advanced Java technologies (Servlets, JDBC, JSP), and frameworks like <span className='text-[#FF6500]'>Maven, Hibernate, MicroServices, Spring, and Spring Boot</span>. I am skilled in working with MySQL and other database technologies, and I have built scalable, secure server-side applications. I have also worked with modern web development tools like <span className='text-[#FF6500]'>RESTful APIs, JSON, and AJAX</span> for seamless user interactions and GSAP for high-performance animations.
</p>
</div>

<div className="flex lg:flex-row flex-col-reverse ">
<p className="md:text-[22px] md:mx-6 leading-loose  lg:w-[50%] mt-4  div1">
Throughout my academic journey, I have applied these technologies <span className='text-[#FF6500]'>to create practical solutions and innovative projects</span>. I am passionate about learning and applying new technologies, and I continue to seek opportunities to grow as a developer and contribute meaningfully to the field of software engineering.
</p>
<img src="./art.jpeg" alt="" className="md:w-[450px]  mb-4 lg:-mt-12 mt-4 div1"/>
</div>


<p className='flex justify-center items-center my-12 div1'>
<Button variant="outlined" sx={{color:"#FF6500", borderColor:"#FF6500" , fontWeight:"500", padding:"10px 20px"}} onClick={handleProjects}>See Projects</Button>
</p>
      </div>


    </div>

    </>
  )
}
