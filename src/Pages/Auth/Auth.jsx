import React, { useState,useContext } from 'react'
// import LayOut from '../../Components/LayOut/LayOut'
import classes from "./SignUp.module.css"
import { Link, useNavigate} from 'react-router-dom';
import {auth} from "../../Utility/Firebase"
  import{signInWithEmailAndPassword, createUserWithEmailAndPassword
} from "firebase/auth";
import { DataContext } from '../../Components/DataProvider/DataProvider';
import {MoonLoader } from "react-spinners"
import { Type } from '../../Utility/action.type';
 function Auth() {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [error,setError]=useState("")
  const[loading, setLoading]=useState({
    signIn:false,
    signUp:false
  })
  const[{user}, dispatch]=useContext(DataContext)
  const navigate=useNavigate()
  const authHandeler = async(e)=>{
   e.preventDefault();
  console.log(e.target.name);
  if(e.target.name=="signIn"){
    setLoading({
      ...loading, signIn:true
    })
signInWithEmailAndPassword(auth,email,password)
.then((userInfo)=>{
  dispatch({
    type: Type.SET_USER,
    user: userInfo.user});
    setLoading({...loading, signIn:false});
    navigate("/")
})
.catch((err)=>{
  // console.log(err);
  setError(err.message)
   setLoading({ ...loading, signUp: false });
});
  }
else{
  setLoading({ ...loading, signUp: true });
  createUserWithEmailAndPassword(auth,email,password)
  .then((userInfo)=>{
    console.log(userInfo);
    dispatch({
      type: Type.SET_USER,
      user: userInfo.user,
    });
    setLoading({...loading,signUp:false});
    navigate("/");
  }).catch((err)=>{
    // console.log(err);
    setError(err.message)
     setLoading({ ...loading, signUp: false });
  });
}
  };


  

  
  return (
    <section className={classes.login}>
      <Link to={"/"}>
        <img
          src="https://en.m.wikipedia.org/wiki/File:Amazon.com-Logo.svg"
          alt=""
        />
      </Link>
      <div className={classes.login__container}>
   <h1>Sign In</h1>
   <form action="">
    <div>
      <label htmlFor="email">Email</label>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} id='email'/>
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input type='password' value ={password} onChange={(e)=>setPassword(e.target.value)}id='password'/>
    </div>
    <button type='submit' 
    name='signIn' onClick={authHandeler} className={classes.login__signinButton}>
    {loading.signIn ?( <MoonLoader color="green" size={15}/>
   ): ("Sign In")}</button>
   </form>
   <p>
    By signing-in you agree to the AMAZON FAKE CLONE conditions of use & sale. Please see our Privacy Notice, our cookies notice and our Interest Based-Ads Notice.
   </p>
   <button type='submit' name='signUp' onClick={authHandeler} className={classes.login__registerButton}>
      {loading.signUp ?( <MoonLoader color="green" size={15}/>
   ): ("create your Amazon Account")}</button>
   {
    error&&<small style={{paddingTop:"5px", color:"red"}}>{error}</small>
   }
      </div>
    </section>
  );
}

export default Auth
