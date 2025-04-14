import "react";

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
    "React.js",
    "AWS Cloud",
    "Docker",
    "GitHub",
    "Git",
    "Hibernate",
    "Maven",
    "HTML",
    "CSS",
    "Tailwind.css",
    "BootStrap",
    "MUI",
    "GSAP",
    "JUnit",
    "PostMan",
    "VsCode",
    "Adobe XD",
    "MongoDB",
    "JDBC",
    "Eclipse",
    "Intellij",
    "Figma"
  ];

  const images = [
    "./Languages/java.png",
    "https://img.icons8.com/color/512/javascript.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUSsQKfApyeIBdSyp3X0vCaokqFaoTRSAYw&s",
    "./Languages/c-.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx25AX0zo1Hxz_tPZ2Oi3GpX9-TfcClBSHLg&s",
    "https://mcgivrer.wordpress.com/wp-content/uploads/2016/02/spring-boot-project-logo.png?w=640",
    "https://img.icons8.com/?size=512&id=90519&format=png",
    "https://masdatsolutions.com/img/icons/j2ee.png",
    "https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png",
    "https://cdn.iconscout.com/icon/free/png-256/free-aws-logo-icon-download-in-svg-png-gif-file-formats--cloud-computing-network-server-database-brand-pack-logos-icons-1583149.png?f=webp&w=256",
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
    "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlq66HeESjzaeRS-HUIpzkTSA4vtqsU6DBUA&s",
    "https://static-00.iconduck.com/assets.00/hibernate-icon-1965x2048-cl94vxbt.png",
    "https://www.svgrepo.com/show/354051/maven.svg",
    "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/html5-512.png",
    "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDeFWiJwV70GxgegCr1OR-cnD1ZsrrH4-vg&s",
    "https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo-thumbnail.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySE8oQbAHSYkYcjYaIZ9N9-YVArJPyEXc-S43ziHv27qJdBc_2fYIz1_pY76IsGetAc4&usqp=CAU",
    "https://svgicons.com/api/ogimage/?id=26052&n=junit",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwbzJZ69SSTLQe8ySIgIMMB68JLukoIkJfQ&s",
    "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/vscode.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s",
    "https://media.licdn.com/dms/image/v2/D4E12AQEdS0M4GZ3ZMA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1668596168560?e=2147483647&v=beta&t=6aPntVft1UIyNirhownA97fUIjPpv0pQ5TLq6Xe_5z8",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqDKaYYtxSS8S-nfAdp_vlYHcq1401M6IZA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAQWu6my_ra_xCMA5v5pEM4BxtPHto6uPLg&s",
    "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png",

  ];

  return (
    <div className="md:p-24 p-4">
      <div>
        <h2 className="text-2xl uppercase tracking-widest p-8">My Skills</h2>

        <div className="flex  gap-4 flex-wrap justify-center items-center">          {languages.map((lang, index) => {
          return (
            <div
              key={index}
              className="border-2 relative  hover:bg-[#FF6500] md:w-[250px] md:h-[150px] w-[150px] h-[100px] flex flex-col rounded-lg hover:border-[#FF6500] transition-colors duration-300 cursor-pointer justify-center items-center"
            >
              <img
                src={images[index]}
                alt=""
                className="md:w-24 w-12 bg-white md:p-4 p-2 rounded-[50%] hover:shadow-2xl "
              />
              <p className="tracking-widest xl absolute bottom-0 uppercase">
                {lang}
                  

                  
              </p>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
