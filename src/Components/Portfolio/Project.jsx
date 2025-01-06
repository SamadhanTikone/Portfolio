import styles from "./Portfolio.module.css"
import InsertLinkIcon from '@mui/icons-material/InsertLink';

// eslint-disable-next-line react/prop-types
export default function Project({url , title, discription}) {
  return (
    <>
      
<div className={`overflow-hidden cursor-pointer h-auto relative w-full image shadow-xl rounded-lg ${styles.card}`}>
  <img src={url} alt="" className=" transition-all duration-700 overflow-hidden " />

  <div className={`  h-1 md:h-2 w-full -bottom-6  absolute box-border ${styles.intro} bg-black bg-opacity- flex flex-col justify-center items-center text-white`}>
    <h2 className="md:text-3xl text-white my-8 font-bold shadow-lg"> {title} </h2>
    <button className="bg-orange-600 mx-2 md:px-4 px-2 text-sm mt-1 md:mt-9 rounded-lg my-4"><InsertLinkIcon/> </button>
  </div>
</div>

<div className={` ${styles.content} flex mt-4 md:mt-0 content `}>
  <p className="w-8 h-full rounded-lg bg-orange-600 inline-block">  </p>
  <div className="ml-4 ">

  <h2 className="inline text-xl md:text-2xl font-semibold underline"> {title}</h2>
  <p className="my-2 md:text-lg">{discription}</p>

  <p className="uppercase">tech:</p>
  </div>
</div>



    </>
  )
}
