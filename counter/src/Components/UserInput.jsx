import React, { useState }  from 'react'
import {useNavigate} from 'react-dom'

const UserInput=()=> {
    const[formdata,setformdata]=useState({
        Name:" ",
        place:" ",
        timer:" ",
    })
    const navigate=useNavigate();
    const handlechange=(e)=>{
        const{name,value}=e.target
        setformdata((prevData)=>({
            ...prevData,
            [name]:value,
        }));
    };
    const handleSubmit=async(event)=>{
        event.preventDefault();
      
    }

}

export default UserInput
