import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

export default function Links() {
  return (
    <div>
       <div className="flex gap-4 mt-4 justify-center items-center">

<p className="hover:scale-150 transition-all hover:text-[#FF6500] duration-25 scale-125 "> 
    <Link to={"https://www.linkedin.com/in/samadhan-tikone-32181522a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}> <LinkedInIcon sx={{fontSize:"27px"}}/> </Link></p>

   <p className="hover:scale-150 transition-all hover:text-[#FF6500] duration-25 scale-125">
   <Link to={"https://www.instagram.com/samadhan__096k/"}> <InstagramIcon sx={{fontSize:"24px"}}/> </Link>
   </p>
    <p className="hover:scale-150 transition-all hover:text-[#FF6500] duration-25 scale-125">
    <Link to={"https://github.com/SamadhanTikone"}> <GitHubIcon sx={{fontSize:"24px"}}/> </Link>
    </p>
    
    <p className="hover:scale-150 transition-all hover:text-[#FF6500] duration-25 scale-125">
    <Link to={"https://twitter.com/tikone_samadhan?t=WnpPBpN-czARHwEpCf949g&s=08"}> <XIcon sx={{fontSize:"22px"}}/> </Link>
    </p>

   </div>
    </div>
  )
}
