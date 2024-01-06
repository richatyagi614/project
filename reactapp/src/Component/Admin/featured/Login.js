import React ,{useState} from 'react'
import {useFormik} from 'formik'
import AdminLoginSchema from'../../../schemas/AdminLoginSchema'
import axios from 'axios';
import {API_URL} from '../../../util/API-URL';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  
  let [errMsg,setErrMsg] = useState("");
    let navigate = useNavigate();
    let loginForm = useFormik({
      validationSchema: AdminLoginSchema,
        initialValues:{
          username : "",
          password : ""
        },
        onSubmit :(formdata)=>{
          axios.post(`${API_URL}admin-auth`, formdata).then((response)=>{

            if(response.data.success == true)

            {
              localStorage.setItem("admi-token",response.data.token);
              navigate("/admin/dashboard");
            }
            if(response.data.success === false && response.data.type === 1);
            {
              setErrMsg("this username is incorrect") ;
           }
           if(response.data.success === false && response.data.type === 2);
           {
             setErrMsg("this password is incorrect") ;
          }
          })
        }
      })
  return (
    <>
    <div className="container">
      <form onSubmit={loginForm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card my-5">
            <div className="card-header">
              <h4>Admin Login</h4>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>UserName</label>
                <input type="text" onChange={loginForm.handleChange} name='username' className= 'form-control' />
      {loginForm.errors.username && loginForm.touched.username? <small className='text-danger'>{loginForm.errors.username}</small>:''}
              </div>
              <div className="form-group">
                <label>password</label>
                <input type="password" onChange={loginForm.handleChange} name='password'  className= 'form-control' />
      {loginForm.errors.password && loginForm.touched.password? <small className='text-danger'>{loginForm.errors.password}</small>:''}
              </div>
              <br/>
              <button type="submit"className='btn btn-success'>Login</button>
              <br/>
              {
                            errMsg ? <div className='alert my-3 alert-danger'>{errMsg}</div> :''
                        }
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>

    </>
  )
}

export default Login