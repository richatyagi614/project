import * as YUP from 'yup';
// import Login from '../Component/Featured/Login';

let LoginSchema = YUP.object({
    username : YUP.string().email("Email Id is Not correct").required("insert your name"),
    password : YUP.string().required("Insert your password")
})

export default LoginSchema;