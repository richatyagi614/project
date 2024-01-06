import React from 'react'
import{useFormik} from "formik"
import LoginSchema from '../../schemas/LoginSchema'

const Login = ()=> { 

    //   let signupForm = useFormik({
    //     // validationSchema: LoginSchema,
    //         initialvalue :{
    //             username : "",
    //             password :""
    //         },
    //         onSubmit :(formdata)=>{
    //             debugger;
    //             console.log(formdata);
    //        }
    //   })
    let signupForm = useFormik({
        validationSchema: LoginSchema,
        initialValues:{
          username : "",
          password : "",
        },
        onSubmit :(formdata)=>{
            console.log(formdata);
  
        }
  
    });

  return (
    <div className="container my-5 mt-150"style={{minHeight:"700px"}}>
         <form onSubmit={signupForm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h4>User Login</h4>
                    </div>
                    <div className="card-body">
                        <div className='my-3'>
                            <lable>Username/Email</lable>
                            <input type="text"  name='username' className= 'form-control' />
      {signupForm.errors.username && signupForm.touched.username? <small className='text-danger'>{signupForm.errors.username}</small>:''}
                            
                        </div>
                        <div className='my-3'>
                            <lable>password</lable>
                            <input type="password"  name='password'  className= 'form-control' />
      {signupForm.errors.password && signupForm.touched.password? <small className='text-danger'>{signupForm.errors.password}</small>:''}
                           
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-success">Login</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
     
  )
}

export default Login