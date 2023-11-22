import { Button } from "@mui/base";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAuth } from "../Redux/AuthSlice";

const Loginpage = () => {
const navigate = useNavigate();
const dispatch = useDispatch();


  const[login,setLogin]=useState({email:'',password:''})
  async function loginHandler(){
    const response = await  axios.post('http://localhost:5000/auth/login',login)
    console.log(response.data.jwtToken)
    dispatch(addAuth(response.data.jwtToken));
    navigate('/admin')
    alert('login successfull')
  }



  return (
    <div className="flex items-center justify-evenly py-32">
      <div className="flex flex-col gap-3">
        <TextField
          value={login.email}
          onChange={(e)=>setLogin({...login,email:e.target.value})}
          id="outlined-basic"
          label="email"
          variant="outlined"
          type="email"
        />

        <TextField
          value={login.password}
          onChange={(e)=>setLogin({...login,password:e.target.value})}
          id="outlined-basic"
          label="password"
          variant="outlined"
          type="password"
        />

        <Button 
        onClick={loginHandler}
        contained className="bg-black active:scale-95 text-white py-3">login</Button>
      </div>
    </div>
  );
};

export default Loginpage;
