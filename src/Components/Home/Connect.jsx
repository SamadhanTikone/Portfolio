import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import "./Home.css";
import { Link } from 'react-router-dom';

export default function Connect() {



  return (
    <div className=' gap-4 mt-44 md:flex hidden p'>

<Link to={"https://github.com/SamadhanTikone"}>
      <Button variant="outlined" sx={{ borderColor: "#FF6500", color: "#FF6500" }} className='button'> <GitHubIcon sx={{ fontSize: 28 }} /> </Button></Link>

      <Link to={"https://www.instagram.com/samadhan__096k/"}>
        <Button variant="outlined" sx={{ borderColor: "#FF6500", color: "#FF6500" }} className='button'> <InstagramIcon sx={{ fontSize: 28 }} />
        </Button>
      </Link>
      <Link to={"https://www.linkedin.com/in/samadhan-tikone-32181522a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
      <Button variant="outlined" sx={{ borderColor: "#FF6500", color: "#FF6500" }} className='button'> <LinkedInIcon sx={{ fontSize: 28 }} /> </Button></Link>

      <Link to={"https://twitter.com/tikone_samadhan?t=WnpPBpN-czARHwEpCf949g&s=08"}>
      <Button variant="outlined" sx={{ borderColor: "#FF6500", color: "#FF6500" }} className='button'> <XIcon sx={{ fontSize: 26 }} /> </Button></Link>


    </div>
  )
}
