import React, {useState} from 'react'
import{useFormik} from "formik"

import LoginSchema from '../../../schemas/LoginSchema'
import axios from 'axios'
import { API_URL } from '../../../util/API-URL';
import { useNavigate } from 'react-router-dom';

const Login = ()=> { 
    let navigate = useNavigate();
    let[errMsg,setErrMsg] = useState("");
    let loginFrm = useFormik({
        validationSchema: LoginSchema,
        initialValues:{
          username : "",
          password : "",
        },
        onSubmit :(formdata)=>{
            
            axios.post(`${API_URL}auth`,formdata).then(response=>{
                    
                if(response.data.success === true)
                {
                    
                    localStorage.setItem("access-token",response.data.token)
                      navigate("/");
                }
                if(response.data.success === false && response.data.type === 1);
                {
                   setErrMsg("this username/Email and password is incorrect!") ;
                }
                if(response.data.success === false && response.data.type === 2)
                {
                   setErrMsg("this  password is incorrect!") ;
                }
            }    
    )}
  
    });


  return (
    <div className="container my-5 mt-150"style={{minHeight:"700px"}}>
         <form onSubmit={loginFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h4>User Login</h4>
                    </div>
                    <div className="card-body">
                        <div className='my-3'>
                            <lable>Username/Email</lable>
                            <input type="text" onChange={loginFrm.handleChange} name='username' className= 'form-control' />
      {loginFrm.errors.username && loginFrm.touched.username? <small className='text-danger'>{loginFrm.errors.username}</small>:''}
                            
                        </div>
                        <div className='my-3'>
                            <lable>password</lable>
                            <input type="password" onChange={loginFrm.handleChange} name='password'  className= 'form-control' />
      {loginFrm.errors.password && loginFrm.touched.password? <small className='text-danger'>{loginFrm.errors.password}</small>:''}
                           
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-success">Login</button>
                        {
                            errMsg ? <div className='alert my-3 alert-danger'>{errMsg}</div> :''
                        }
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
     
  )
}

export default Login