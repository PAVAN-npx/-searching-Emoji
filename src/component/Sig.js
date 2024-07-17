import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import { useState,useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import App from '../App';
import './Sig.css'
import './Withg'
import Card1 from './Card1';
import Withg from './Withg';
import Button1 from './Button1';




export default function Sig() {
    const [user, setUser] = useState(null);
    const [deatails, setdetails] = useState({
name:'ll',email:'lll',photo:'ll',last:'l',cre:''
    });
    const[body,setbody]=useState(true)
    const[name,setname]=useState("")
    const firebaseConfig = {
        apiKey: "AIzaSyDj_yFH1N5zH8wroWpmhG8xoU8uNoc3DyI",
        authDomain: "fir-a122b.firebaseapp.com",
        projectId: "fir-a122b",
        storageBucket: "fir-a122b.appspot.com",
        messagingSenderId: "190746243273",
        appId: "1:190746243273:web:819eb56affbaf2b2f91d18",
        measurementId: "G-E79WKT1NNX"
      };      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      function n(b){
    
        const timestamp =parseInt(b);
    const date = new Date(timestamp);
    const e=date.toString();
    return e;

        
    }
    const signg=async()=>{
        await signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result)
          console.log(result.user.reloadUserInfo.createdAt)
          console.log(result.user.email);
          setname(result.user.uid)
          setdetails({
            name:result.user.displayName,
            email:result.user.email,
            photo:result.user.photoURL,
            last:n(result.user.reloadUserInfo.lastLoginAt),
            cre:n(result.user.reloadUserInfo.createdAt)
          })
    
          console.log(deatails)
          console.log(deatails.last)
          console.log(result.user.displayName);
          console.log(result.user.photoURL);
          setbody(false)

        })
        .catch((error) => {
          console.error(error);
        });

    }

  useEffect(() => {
    auth.onAuthStateChanged( (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    
  }, []);
  return (<div><body className={body?"body":";"}></body>

{

user?  <div><p>createdAt:{deatails.cre}</p><div className='card12'><Card1 detail={deatails} /></div>

<div  onClick={() => signOut(auth)}><Button1/></div>

<App/>
   


{/* unverse.io */}
</div>:
 
  
   <center><div onClick={signg} className='withg'><Withg /></div></center> 
   
    }



  </div>

      
  )
}
