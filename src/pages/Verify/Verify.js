import { useCallback, useRef, useState,useEffect} from "react";
import { Header } from '../../components';
import {Button,TextField,FormHelperText,InputLabel,MenuItem,Select,FormControl} from '@mui/material';
import styles from './Verify.module.css';
import { userdata } from '../../data/dummy';
import SaveIcon from '@mui/icons-material/Save';
import { useGlobalContext } from '../../contexts/context2'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Verify = () => {

	const {pano} = useGlobalContext()
	const [create,setCreate] = useState(false)
	const currentDate = new Date();
	const day = String(currentDate.getDate()).padStart(2, '0');
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const year = currentDate.getFullYear();
	const formattedDate = `${day}/${month}/${year}`;

	const [user,setUser] = useState({
  No:'',
  Details:{
    Name:'',
    Rank:''
  }
})


	useEffect(() => {

		const data = userdata.filter((i) => ((i.No === pano.No)&&(i.Details.Rank === pano.Designation)))
		if(data.length === 0)
			{
				setCreate(true)
			}
		else{
			setUser(data[0])
			setCreate(false)

		}
		console.log(data)


	},[])


	return (

			<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
   <Header  title={`User${create?'Creation':'Verification'}`} />

   <div className={styles.fields}>
   <div className='flex justify-between m-20'>
   <TextField id="outlined-basic" label="No" variant="filled" disabled={create?false:true} value={user?.No} onChange={(e) =>setUser(prev => ({...prev,No:e.target.value})) } />
   <TextField id="outlined-basic" label="Name" variant="filled" disabled={create?false:true} value={user?.Details.Name} onChange={(e) =>setUser(prev => ({...prev,Name:e.target.value})) } />
   </div>
   <div className='flex justify-between m-20'>
   <TextField id="outlined-basic" label="Rank" variant="filled" disabled={create?false:true} value={user?.Details.Rank} onChange={(e) =>setUser(prev => ({...prev,Rank:e.target.value})) } />
   <TextField id="outlined-basic" label="Date" variant="filled" disabled={true} value={formattedDate}/>
   </div>
   </div>

   <div className='flex justify-center items-center'>
   {create?<Button variant="contained" >Save <SaveIcon /></Button>:
   <Button variant="contained">Proceed <KeyboardDoubleArrowRightIcon /></Button>}
   </div>

   </div>

		)
}

export default Verify
