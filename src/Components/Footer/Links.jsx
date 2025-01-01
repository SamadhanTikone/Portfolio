import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

export default function Links() {
  return (
    <div>
       <div className="flex gap-4 mt-4 justify-center items-center">

<p className="hover:scale-150 transition-all duration-25 scale-125">   <Link> <LinkedInIcon/> </Link></p>
   <p className="hover:scale-150 transition-all duration-25 scale-125">
   <Link> <InstagramIcon/> </Link>
   </p>
    <p className="hover:scale-150 transition-all duration-25 scale-125">
    <Link> <GitHubIcon/> </Link>
    </p>
    
    <p className="hover:scale-150 transition-all duration-25 scale-125">
    <Link> <XIcon/> </Link>
    </p>

   </div>
    </div>
  )
}
