import React,{useState,useEffect} from 'react'
import styles from './Login.module.css';
import Logo from './logo1.png'
import { useStateContext } from '../../contexts/context';

const Login = () => {

	const [name,setName] = useState('')
	const [pass,setPass] = useState('')
	const {user1,setUser1} = useStateContext()
	const [incpass,setIncpass] = useState(false)

	const handleSubmit = (e) => {
if(name !== '' && pass !== '')
{
	const newdat ={
		name:name
	}
	localStorage.setItem('myMicData', JSON.stringify(name));
	
	setUser1(!user1)

}
else
{
	setIncpass(true)
}
 
 
	}
  return (
    <div>
      <div className={styles.background11}>
      <h1 className={styles.title11}>Indian Navy Welcomes you</h1>
      <h1 className={styles.title11} style={{fontSize:'35px',marginTop:'0px'}}>शं नो वरुण</h1>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
       <div>

      <form className={styles.form12} onSubmit={(e) => handleSubmit(e.target.value)}>
       
        <img src={Logo} width='100px' height = '100px' style={{position:'absolute',top:'1%',left:'37%'}}/>
        <label htmlFor="username" className={styles.lab}>Username</label>
        <input className={styles.inp99} type="text" placeholder="Email or Phone" id="username" onChange={(e)=> setName(e.target.value)} value={name}/>

        <label htmlFor="password">Password</label>
        <input className={styles.inp99} type="password" placeholder="Password" id="password" onChange={(e)=> setPass(e.target.value)} value={pass}/>

        <button  className={incpass ? styles.buttonshake :styles.butt99} type='submit'>Log In</button>
        
      </form>
      </div>
    </div>
  );
};

export default Login;
