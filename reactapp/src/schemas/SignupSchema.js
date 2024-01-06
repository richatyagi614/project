import * as YUP from 'yup';


const SignupSchema= YUP.object({
    name: YUP.string().required("Insert your name"),
    email: YUP.string().email().required("Insert your user"),
    password: YUP.string().required("Insert your password"),
    repassword: YUP.string().oneOf([YUP.ref("password")],"password and re-password should be same").required("Insert your re-password"),
    gender: YUP.string().required("select your gender"),
    address: YUP.string().required("Insert your address "),
    contact: YUP.number().required("Insert your contact ").typeError("Insert number only").min(10000000,"minimum 8 Digit").max(999999999999,"maximum 12 Digit"),
    state: YUP.string().required("select your state"),
    city: YUP.string().required("select your city")
  });

  export default SignupSchema;