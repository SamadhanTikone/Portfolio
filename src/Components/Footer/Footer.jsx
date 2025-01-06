

import Links from "./Links";


export default function Footer() {
  
    const data = new Date()
    let year = data.getFullYear();



    
  
  return (
  <div className={`bg-black text-white md:p-12 p-6`}>
  
  <div className=" flex md:flex-row flex-col justify-around">
      
      <div className="md:w-[60%]">

<h2 className="font-semibold md:text-3xl text-xl mb-4">Tikone Samadhan</h2>
<p className="md:text-lg text-sm ">A passionate computer science student skilled in Java, MySQL, web development, and GitHub. Driven by innovation, constantly exploring technology to create impactful solutions.</p>


      </div>

      <div className="flex flex-col md:mt-0 mt-6">
        <h3 className="text-center">Follow me on:</h3>

        <Links isFlex={true}/>
      

      </div>
   
    </div>
  
  <p className="text-center text-sm md:text-md mt-8">All Copyrights © {year} Tikone Samadhan</p>

  </div>
  )
}
