import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { API_URL } from '../../../util/API-URL';

const MyProfile = () => {
    let[user,setUser]=useState({});
    let navigate = useNavigate();
    
   useEffect(()=>{
    if(!localStorage.getItem("access-token"))
       {
           navigate("/login");
       }
   },[])
   useEffect(()=>{
    axios.get(`${API_URL}user-profile`,{
        headers :{Authorizaion : localStorage.getItem("access-token")}

    }).then(response=>{
        console.log(response.data);
        setUser(response.data.result);
    })

   },[])

  return (
    <div className="container my-4" style={{minHeight:"710px"}}>
        <div className="row">
            <div className="col-md-12">
                <h4>User Profile</h4>
                <b>Full Name : {user.name}</b>
                <b>Username/Email : {user.username}</b>
            </div>
        </div>
    </div>


  )
}

export default MyProfile