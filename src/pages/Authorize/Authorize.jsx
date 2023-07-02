import { useCallback, useRef, useState } from "react";
import { Header } from '../../components';
import Webcam from "react-webcam";
import { useNavigate,Link } from "react-router-dom";
import {Button,TextField,FormHelperText,InputLabel,MenuItem,Select,FormControl} from '@mui/material';
import styles from './Authorize.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { useGlobalContext } from '../../contexts/context2'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';



const Authorize = () => {

	const webcamRef = useRef(null);
  const navigate = useNavigate()
	const [imgSrc, setImgSrc] = useState(null);
  const [userid,setUserid] = useState(null) 
const {setPano} = useGlobalContext()
	 const [designation, setDesignation] = useState('Sailor');

  const handleChange = (event) => {
    setDesignation(event.target.value);
  };



	 const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

	  const retake = () => {
    setImgSrc(null);
  };

  const handleSubmit = () => {

    if(imgSrc !== null && userid !== null )
    {
      setPano({Designation:designation,No:userid})
      navigate('/verify')
    }
    else
    {
      toast.error(`Please enter value`);
    }
  }


	return (

		<>
	<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
  <Toaster />
   <Header  title="User Verification" />
<div className={styles.containall}>
   <div className='containcam'>
   {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam height={300} width={600} style={{ border: '2px solid #000000',height:'400px'}} ref={webcamRef}  screenshotFormat="image/jpeg"
          screenshotQuality={0.8} />
      )}
   </div>
   
</div>

<div style={{display:'flex',width:'100%',marginTop:'30px',alignItems:'center',justifyContent:'center'}}>
<div className='buttoncontain'>
    
    {imgSrc ? (
          <button className={styles.buttoncss} onClick={retake}>ReCapture</button>
        ) : (
          <button className={styles.buttoncss} onClick={capture}>Capture</button>
        )}

    </div>
<FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Designation</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={designation}
          label="Designation"
          onChange={handleChange}
          disabled={imgSrc?false:true}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Sailor">Sailor</MenuItem>
          <MenuItem value="Civilian">Civilian</MenuItem>
          
        </Select>
        
      </FormControl>

      <TextField id="outlined-basic" label={designation === "Sailor"?'P.No':'Aadhaar No'} variant="filled" disabled={imgSrc?false:true} value={userid} onChange={(e) =>setUserid(e.target.value) } />
</div>
<div style={{display:'flex',width:'100%',marginTop:'30px',alignItems:'center',justifyContent:'center'}}>
<Button variant="contained" onClick={handleSubmit}>Proceed <KeyboardDoubleArrowRightIcon /></Button>
</div>
   </div>
		</>

		)
}


export default Authorize