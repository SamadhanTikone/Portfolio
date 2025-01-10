import { useContext, useState } from "react"
import "./Resume.css"
import { Theme } from "../Context/Context"
import JsData from "./JsData";
import JavaData from "./JavaData";
import CData from "./CData";
import CppData from "./CppData";
import { Link } from "react-router-dom";

export default function Resume() {

  const [isPersonalClicked, setIsPersonalClicked] = useState(true);
  const [isEducationClicked, setIsEducationClicked] = useState(false);
  const [isExpClicked, setIsExpClicked] = useState(false);
  const [isSkillsClicked, setIsSkillsClicked] = useState(false);

  const handleClick = () => {
    setIsPersonalClicked(isClicked => !isClicked);
  }
  const handleEducation = () => {
    setIsEducationClicked(isClicked => !isClicked);
  }
  const handleExp = () => {
    setIsExpClicked(isClicked => !isClicked);
  }
  const handleSkills = () => {
    setIsSkillsClicked(isClicked => !isClicked);
  }

  const { theme } = useContext(Theme)
  return (
    <div className={`md:px-24  pt-12 ${theme ? "bg-[#222831] text-white" : "bg-white text-black"}`}>

<div>
      <a href="./Resume/TikoneSamadhan_Resume.pdf" download>
        <button className="px-4 py-2 bg-[#FF6500] rounded-lg">Download Resume</button>
      </a>
    </div>

      <div className={`flex w-full md:px-12 px-4 main  md:flex-row flex-col ${isPersonalClicked ? "justify-between" : "null"}`}>

        <div className="flex showInfo py-4">
          <span className="w-4 hLine bg-[#FF6500] text-center mt-3"></span>
          <img src="./Resume/java-script.png" alt="file.js" className="w-8 h-8 mr-2" />
          <h1 className={`cursor-pointer md:text-xl  lg:text-2xl text-lg`} onClick={handleClick}>Personal.js</h1>

        </div>

        <div className={`contentResume ${isPersonalClicked ? "block" : " hidden "} md:w-[60%] w-full`}>


          <JsData value={"tikone samadhan mahadev"} variable={"name"} />
          <JsData value={"B.Tech In Computer Science and Engineering"} variable={"qualification"} />
          <JsData value={"+91-9356807968"} variable={"mobile"} />
          <JsData value={"tikonesamadhan03@gmail.com"} variable={"email"} />
          <JsData value={"Dharashiv / Pune , Maharashtra, India."} variable={"address"} />

        </div>


      </div>


      <div className={`flex w-full md:px-12 px-4 main  md:flex-row flex-col ${isEducationClicked ? "justify-between" : "null"}`}>

        <div className="flex showInfo py-4">
          <span className="w-4 hLine bg-[#FF6500] text-center mt-3"></span>
          <img src="./Resume/java.png" alt="file.js" className="w-8 h-8 mr-2" />
          <h1 className={`cursor-pointer md:text-xl lg:text-2xl text-lg`} onClick={handleEducation}>Education.java</h1>

        </div>

        <div className={`contentResume ${isEducationClicked ? "block" : " hidden "} md:w-[60%] w-full`}>

          <p className="mt-4 text-blue-500"> {`*******GRADUATION *******`} </p>
          <JavaData variable={"college"} value={"TPCT's College of Engineering"} />
          <JavaData variable={"degree"} value={"B.Tech In Computer Science and Engineering"} />
          <JavaData variable={"year"} value={"2021-2025"} />
          <JavaData variable={"cgpa"} value={"7.21/10"} />

          <p className="mt-4 text-blue-500"> {`*******HSC *******`} </p>
          <JavaData variable={"college"} value={"K.B.P Mahavidyalay"} />
          <JavaData variable={"degree"} value={"HSC"} />
          <JavaData variable={"year"} value={"2019-2021"} />
          <JavaData variable={"percentage"} value={"80%"} />

          <p className="mt-4 text-blue-500"> {`*******SSC *******`} </p>
          <JavaData variable={"college"} value={"Saraswati Vidyalaya "} />
          <JavaData variable={"degree"} value={"SSC"} />
          <JavaData variable={"year"} value={"2018-2019"} />
          <JavaData variable={"percentage"} value={"82%"} />

        </div>
      </div>


      <div className={`flex w-full md:px-12 px-4 main  md:flex-row flex-col ${isExpClicked ? "justify-between" : "null"}`}>

        <div className="flex showInfo py-4">
          <span className="w-4 hLine bg-[#FF6500] text-center mt-3"></span>
          <img src="./Resume/letter-c.png" alt="file.js" className="w-8 h-8 mr-2" />
          <h1 className={`cursor-pointer md:text-xl lg:text-2xl text-lg`} onClick={handleExp}>Experience.c</h1>

        </div>

        <div className={`contentResume ${isExpClicked ? "block" : " hidden "} md:w-[60%] w-full`}>

        <p className="mt-4 text-violet-500"> {`******* Internship *******`} </p>
          <CData value={"Auxirem Techology Pvt. Ltd."} variable={"company_name"} />
          <CData value={"Intern"} variable={"post"} />
          <CData value={"Dec-24 to Ongoing"} variable={"duration"} />
          <CData value={"Java, Jsp, Servlet, JDBC, Spring, SpringBoot, Hibernate, Maven, Postman, MicroServices"} variable={"Skills"} />
          <CData value={"Dharashiv, Maharashtra, India."} variable={"Location"} />
          <p className="mt-4 text-gray-500"> {`//Key Points `} </p>
         
          
          <p className="mt-4 text-gray-500"> {`1.Building web apps using Java, Servlet, and Spring frameworks. `} </p>
          <p className="mt-4 text-gray-500"> {`2.Using JDBC to interact with and optimize database operations. `} </p>

          <p className="mt-4 text-gray-500"> {`3.Gain real-world experience developing web apps using Java, Spring, HTML, CSS, JavaScript, Eclipse, andGit/GitHub. `} </p>




          <p className="mt-4 text-violet-500"> {`******* Internship *******`} </p>
          <CData value={"Emacron Techology "} variable={"company_name"} />
          <CData value={"Intern"} variable={"post"} />
          <CData value={"Dec-24 to Ongoing"} variable={"duration"} />
          <CData value={"JavaScript, HTML5, CSS3, React.js, Redux, Git-GitHub, Versel, AWS"} variable={"Skills"} />
          <CData value={"Pune, Maharashtra, India."} variable={"Location"} />
          <p className="mt-4 text-gray-500"> {`//Key Points `} </p>
         
          
          <p className="mt-4 text-gray-500"> {`1.Developed dynamic user interfaces using React.js, React Hooks, and reusable components to build responsive and interactive web applications. `} </p>
          <p className="mt-4 text-gray-500"> {`Integrated RESTful APIs for fetching and displaying data while managing state efficiently with Redux and React Context. `} </p>

          <p className="mt-4 text-gray-500"> {`3.Collaborated effectively using Git/GitHub for version control, contributing to team-based projects and resolving bugs.
 `} </p>

        </div>

      </div>

      <div className={`flex w-full md:px-12 px-4 main  md:flex-row flex-col ${isSkillsClicked ? "justify-between" : "null"}`}>

<div className="flex showInfo py-4">
  <span className="w-4 hLine bg-[#FF6500] text-center mt-3"></span>
  <img src="./Resume/c-.png" alt="file.js" className="w-8 h-8 mr-2" />
  <h1 className={`cursor-pointer md:text-xl lg:text-2xl text-lg`} onClick={handleSkills}>Skills.cpp</h1>

</div>

<div className={`contentResume ${isSkillsClicked ? "block" : " hidden "} md:w-[60%] w-full`}>


  <CppData value={"JAVA, JavaScript, C, C++, OOPS"} variable={"programming"} />
  <CppData value={"HTML5, CSS3, JS, React.js, Bootstrap, Tailwind"} variable={"web_technologies"} />
  <CppData value={"MySQL, MongoDB, JDBC, SQL"} variable={"databases"} />
  <CppData value={"React.js, Spring, SpringBoot, Hibernate"} variable={"frameworks"} />
  <CppData value={"Git, Github, AdobeXD, VScose, Eclipse,Postman"} variable={"other_tools"} />

</div>
</div>





<div className={`flex w-full md:px-12 px-4 main  md:flex-row flex-col ${isSkillsClicked ? "justify-between" : "null"}`}>

<div className="flex showInfo py-4">
  <span className="w-4 hLine bg-[#FF6500] text-center mt-3"></span>
  <img src="./Resume/sql.png" alt="file.js" className="w-8 h-8 mr-2" />
  <h1 className={`cursor-pointer md:text-xl lg:text-2xl text-lg`} onClick={handleSkills}>Project.sql</h1>

</div>

<div className={`contentResume ${isSkillsClicked ? "block" : " hidden "} md:w-[60%] w-full`}>


 <button className="border py-2 px-4 hover:bg-[#FF6500] transition-all duration-500"> <Link to={"/portfolio"}>Portfolio </Link> </button>

</div>
</div>




<div className={`flex w-full md:px-12 px-4 main  md:flex-row flex-col ${isSkillsClicked ? "justify-between" : "null"}`}>

<div className="flex showInfo py-4">
  <span className="w-4 hLine bg-[#FF6500] text-center mt-3"></span>
  <img src="./Resume/substance.png" alt="file.js" className="w-8 h-8 mr-2" />
  <h1 className={`cursor-pointer md:text-xl lg:text-2xl text-lg`} onClick={handleSkills}>Summery.md</h1>

</div>

<div className={`contentResume ${isSkillsClicked ? "block" : " hidden "} md:w-[60%] w-full`}>


<p className="text-gray-300">

{
  `<!-- I am proficient in Java, with a strong foundation in object-oriented programming and system development. My expertise lies in designing efficient and scalable software solutions. I have a solid command of MySQL, excelling in database design, management, and complex querying. I am passionate about creating optimized, maintainable, and user-friendly applications. My skills enable me to contribute effectively to full-stack development and database-driven projects. -->
  `
}

<button className="border py-2 px-4 hover:bg-[#FF6500] transition-all duration-500"> <Link to={"/about"}>Read More.. </Link> </button>
 </p>
</div>
</div>




<div className={`flex w-full md:px-12 px-4 main  md:flex-row flex-col ${isSkillsClicked ? "justify-between" : "null"}`}>

<div className="flex showInfo py-4">
  <span className="w-4 hLine bg-[#FF6500] text-center mt-3"></span>
  <img src="./Resume/certificate.png" alt="file.js" className="w-8 h-8 mr-2" />
  <h1 className={`cursor-pointer md:text-xl lg:text-2xl text-lg `} onClick={handleSkills}>Certificate</h1>

</div>

<div className={`contentResume ${isSkillsClicked ? "block" : " hidden "} md:w-[60%] w-full`}>


<ul className="list-disc underline">

<li className="hover:text-[#FF6500]">
<Link to={"https://drive.google.com/file/d/1cVfTMArzJeBv8ukCb7kk0IxapESsws5J/view"}> Internship Certificate</Link>
</li>

<li className="hover:text-[#FF6500]">
<Link to={"https://drive.google.com/file/d/1cWrXLLoD9UdbHxla95WektLMuBzsbziG/view"}>Basic of Networking by Cisco </Link>
</li>

</ul>


</div>
</div>



    </div>
  )
}
