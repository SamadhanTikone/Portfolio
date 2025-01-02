import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Error() {


  const navigate = useNavigate();

  const handleNavigate = ()=>{
    navigate("/")
  }

  return (


    <div className="flex justify-center items-center flex-col">
        <p className='my-8'>
        <Button variant="contained" onClick={handleNavigate} sx={{bgcolor:"#FF6500"}}>Go Back To Home</Button>
        </p>

    <img src="./404-space.svg" alt="" className="w-[70%]" />
    </div>



    
  )
}
