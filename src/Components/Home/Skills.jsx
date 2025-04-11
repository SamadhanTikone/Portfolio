import 'react'

export default function Skills() {


  const languages = [
    "Core Java",
    "JavaScript",
    "C",
    "C++",
    "MYSQL",
    "Spring Boot",
    "Spring",
    "J2EE",
  ]

  const images = [
    "./Languages/java.png",
    "https://img.icons8.com/color/512/javascript.png",
    "./Languages/letter-c.png",
    "./Languages/c-.png",
    "./Languages/sql.png",
    "https://mcgivrer.wordpress.com/wp-content/uploads/2016/02/spring-boot-project-logo.png?w=640",
    "https://img.icons8.com/?size=512&id=90519&format=png",
    "https://3.imimg.com/data3/QQ/RO/MY-13627301/j2ee-programming.png",

  ]

  return (
    <div className='p-24 '>
      
      <div>
        <h2 className='text-2xl uppercase'>My Skills</h2>


                  <div className='flex  gap-4 flex-wrap' >
                    
                    
                   {
                    languages.map((lang,index)=>{

                     return( <div key={index} className='border-2 relative  hover:bg-[#FF6500] w-[250px] h-[150px] flex flex-col rounded-lg hover:border-[#FF6500] transition-colors duration-300 cursor-pointer justify-center items-center'> 

                      <img src={images[index]} alt="" className='w-24 bg-white p-4 rounded-[50%] drop-shadow-custom '/>
                      <p className='tracking-widest xl absolute bottom-0 uppercase'>{lang}</p>

        </div>)
                    })
                   }

                     </div>


      </div>

    </div>
  )
}
