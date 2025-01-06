import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import "./Home.css";
export default function Connect() {
  return (
    <div className=' gap-4 mt-44 md:flex hidden p'>
    
    <Button variant="outlined" sx={{borderColor:"#FF6500",  color:"#FF6500"}} className='button'> <GitHubIcon sx={{ fontSize: 28 }} /> </Button>


    <Button variant="outlined" sx={{borderColor:"#FF6500",  color:"#FF6500"}} className='button'> <InstagramIcon sx={{ fontSize: 28 }} /> 
    </Button>


    <Button variant="outlined" sx={{borderColor:"#FF6500",  color:"#FF6500"}} className='button'> <LinkedInIcon sx={{ fontSize: 28 }} /> </Button>


    <Button variant="outlined" sx={{borderColor:"#FF6500",  color:"#FF6500"}} className='button'> <XIcon sx={{ fontSize: 24 }} /> </Button>


    </div>
  )
}
