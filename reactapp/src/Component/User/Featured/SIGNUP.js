import { useEffect,useState } from 'react';

import axios from 'axios'
import{useFormik} from'formik';
import SignupSchema from '../../../schemas/SignupSchema'

import { API_URL } from '../../../util/API-URL';
import { useNavigate } from 'react-router-dom';

const Signup =()=>{

   let navigate = useNavigate();
  let signupForm = useFormik({
      validationSchema: SignupSchema,
      initialValues:{
        name : "",
        email : "",
        password : "",
        repassword : "",
        gender : "",
        address : "",
        contact : "",
        city : "",
        state : ""
      },
      onSubmit :(formdata)=>{
           axios.post(`${API_URL}signup`,formdata).then(response=>{
            // console.log(response.data);

            if(response.data.success==true)
            {

               navigate("/login")
            }
           })
      }
  });


let [City,SetCity]= useState([]);
let [State,SetState]= useState([]);

useEffect(()=>{
  axios.get(`${API_URL}City/State`).then(response=>{
      SetState(response.data);
  })
},[])






let getCity =(e)=>{
    let x = e.target.value;
    axios.get(`${API_URL}city/getcity/${x}`).then(response=>{
     SetCity(response.data);
      
    })
}

// const getState =(e)=>{
//   let x = e.target.value;
//   axios.get(`${API_URL}State/getState/${x}`).then(response=>{
//     SetState(response.data);
//   })
// }

  return (
    <div className="container my-5"style={{minHeight:"700px"}}>
      <form onSubmit={signupForm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card mt-5">
                    <div className="card-header">
                        <h3>User Registration</h3>
                    </div>
                    <div className="card-body">
                        <div className="my-3">
                        <label>Full Name</label>
      <input type="text" onChange={signupForm.handleChange} name='name' className= 'form-control' />
      {signupForm.errors.name && signupForm.touched.name? <small className='text-danger'>{signupForm.errors.name}</small>:''}
      
      </div>
      <div className="my-3">
                        <label>Email/username</label>
      <input type="text" onChange={signupForm.handleChange} name='email'className="form-control"/>
      {signupForm.errors.email && signupForm.touched.email? <small className='text-danger'>{signupForm.errors.email}</small>:''}</div>
      <div className="my-3">
                        <label>password</label>
      <input type="password"onChange={signupForm.handleChange} name='password' className="form-control"/>
      {signupForm.errors.password && signupForm.touched.password? <small className='text-danger'>{signupForm.errors.password}</small>:''}
      </div>
      <div className="my-3">
                        <label>Re-password</label>
      <input type="password" onChange={signupForm.handleChange} name='repassword'className="form-control"/>
      {signupForm.errors.repassword && signupForm.touched.repassword? <small className='text-danger'>{signupForm.errors.repassword}</small>:''}
      </div>
      <div className="my-3">
                        <label>Address</label>
      <textarea onChange={signupForm.handleChange} name='address'className="form-control"></textarea>
      {signupForm.errors.address && signupForm.touched.address? <small className='text-danger'>{signupForm.errors.address}</small>:''}
      </div>

      <div className="my-3">
        <lable>state</lable>

        <select  onChange={(e)=>{getCity(e);signupForm.handleChange(e)}}  name='state' className='form-control'>
        
        
            <option>select</option>
            {
        State.map(value=><option>{value}</option>)
            
      }
        </select>
        {signupForm.errors.state && signupForm.touched.state? <small className='text-danger'>{signupForm.errors.state}</small>:''}
      </div>

      <div className="my-3">
                        <label>City</label>
      <select className="form-control" name='city' onChange={signupForm.handleChange}>
      <option>select</option>
      {
        City.map(value=><option>{value.name}</option>)
      } 
      
      </select>
     {
      signupForm.errors.city && signupForm.touched.city ? <small className='text-danger'>{signupForm.errors.city}</small> : ""
     }
        

      </div>
      <div className="my-3">
                        <label>Gender</label><br/>
      Male<input type="radio"onChange={signupForm.handleChange} name='gender'value='male'/>
      <br/>
      
      Female<input type="radio"onChange={signupForm.handleChange} name='gender'value='female'/>
      <br/>
      {signupForm.errors.gender && signupForm.touched.gender? <small className='text-danger'>{signupForm.errors.gender}</small>:''}
      </div>
      <div className="my-3">
                        <label>Contact</label>
      <input type="text" onChange={signupForm.handleChange} name='contact'className="form-control"/>
      {signupForm.errors.contact ? <small className='text-danger'>{signupForm.errors.contact}</small>:''}
      </div>
     <div className="card-Footer">
        <button type="submit"className="btn btn-success">Signup</button>
     </div>
    
                        
                        </div>
                    </div>
                </div>

            </div>
            </form>
        </div>
    
  )
}

export default Signup