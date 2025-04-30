import "react";

export default function Skills() {
  const categorizedData = [
    {
      name: "Languages",
      lang: ["Core Java", "JavaScript", "C", "C++", "MYSQL", "HTML", "CSS"],
      urls: [
        "./Languages/java.png",
        "https://img.icons8.com/color/512/javascript.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUSsQKfApyeIBdSyp3X0vCaokqFaoTRSAYw&s",
        "./Languages/c-.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx25AX0zo1Hxz_tPZ2Oi3GpX9-TfcClBSHLg&s",
        "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/html5-512.png",
        "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png"
      ]
    },
    {
      name: "Frameworks",
      lang: ["Spring Boot", "Spring", "J2EE", "React.js", "Tailwind.css", "BootStrap", "MUI", "GSAP"],
      urls: [
        "https://mcgivrer.wordpress.com/wp-content/uploads/2016/02/spring-boot-project-logo.png?w=640",
        "https://img.icons8.com/?size=512&id=90519&format=png",
        "https://masdatsolutions.com/img/icons/j2ee.png",
        "https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDeFWiJwV70GxgegCr1OR-cnD1ZsrrH4-vg&s",
        "https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo-thumbnail.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySE8oQbAHSYkYcjYaIZ9N9-YVArJPyEXc-S43ziHv27qJdBc_2fYIz1_pY76IsGetAc4&usqp=CAU"
      ]
    },
    {
      name: "Tools",
      lang: ["AWS Cloud", "Docker", "GitHub", "Git", "Maven", "PostMan", "VsCode", "Eclipse", "Intellij"],
      urls: [
        "https://cdn.iconscout.com/icon/free/png-256/free-aws-logo-icon-download-in-svg-png-gif-file-formats--cloud-computing-network-server-database-brand-pack-logos-icons-1583149.png?f=webp&w=256",
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
        "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlq66HeESjzaeRS-HUIpzkTSA4vtqsU6DBUA&s",
        "https://www.svgrepo.com/show/354051/maven.svg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwbzJZ69SSTLQe8ySIgIMMB68JLukoIkJfQ&s",
        "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/vscode.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqDKaYYtxSS8S-nfAdp_vlYHcq1401M6IZA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAQWu6my_ra_xCMA5v5pEM4BxtPHto6uPLg&s"
      ]
    },
    {
      name: "Design",
      lang: ["Adobe XD", "Figma"],
      urls: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png",
        "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png"
      ]
    },
    {
      name: "Testing",
      lang: ["JUnit"],
      urls: [
        "https://svgicons.com/api/ogimage/?id=26052&n=junit"
      ]
    },
    {
      name: "Database",
      lang: ["MongoDB", "JDBC","SQL"],
      urls: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s",
        "https://media.licdn.com/dms/image/v2/D4E12AQEdS0M4GZ3ZMA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1668596168560?e=2147483647&v=beta&t=6aPntVft1UIyNirhownA97fUIjPpv0pQ5TLq6Xe_5z8",
        "https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.png"
      ]
    }
  ];
  

  return (
    <>
    
    <div className="md:p-24 p-4  text-white">
  <div>
    <h2 className="text-3xl font-bold uppercase tracking-widest mb-12 text-center text-[#FF6500]">
      My Skills
    </h2>

    {categorizedData.map((category, i) => (
      <div key={i} className="mb-16">
        {/* Section Heading */}
        <h3 className="text-2xl font-semibold uppercase mb-6 border-b-2 pb-2 border-[#FF6500] text-center">
          {category.name}
        </h3>

        {/* Skill Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {category.lang.map((lang, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 hover:border-[#FF6500] hover:bg-[#ff650010] w-[140px] md:w-[200px] h-[120px] md:h-[160px] flex flex-col items-center justify-center rounded-xl shadow-md transition-all duration-300 ease-in-out"
            >
              <img
                src={category.urls[index]}
                alt={lang}
                className="w-12 md:w-20 h-12 md:h-20 object-contain bg-white p-2 rounded-full shadow"
              />
              <p className="mt-2 text-sm md:text-base font-medium text-center uppercase tracking-wide">
                {lang}
              </p>
            </div>
          ))}
        </div>

        {/* Horizontal Line */}
        {i !== categorizedData.length - 1 && (
          <hr className="mt-12 border-t border-2 border-black" />
        )}
      </div>
    ))}
  </div>
</div>


    </>
  );
}
