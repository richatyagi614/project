import* as YUP from 'yup';

let AdminLoginSchema = YUP.object({
    username : YUP.string().required("Insert your username"),
    password : YUP.string().required("Insert your password"),
})
export default AdminLoginSchema;