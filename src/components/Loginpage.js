import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import toast from "react-hot-toast"
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  
} from '@chakra-ui/react';

function LoginForm() {
  const [data, Setdata] = useState({
    email: '',
    password: '',
  });
const navigate=useNavigate()
  const handleChange = (event) => {
    const { name, value } = event.target;
    Setdata({ ...data, [name]: value });
  };
  const passwordverify=(err={},values)=>{
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(!values.password){
        err.password=toast.error("Passwod Required !")
    } else if(values.password.includes(" ")){
        err.password=toast.error("Invalid Passwod!")
    }
    else if(values.password.length < 4){
        err.password=toast.error("Passwod must be more than 4 character!")
    } else if(!specialChars.test(values.password)){
        err.password=toast.error("Passwod must have Special Character")
    }
    return err
}
const emailVerify=(err={},values)=>{
    if(!values.email){
        err.email=toast.error("Email Required!")
    } else if(values.email.includes(" ")){
        err.email=toast.error("Invalid Email...!")
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        err.email = toast.error("Invalid email address...!")
    }
    return err
}



  const loginValidation=async(values)=>{
    const errors=emailVerify({},values)
    passwordverify(errors,values)
   

    return errors
}

  const handleSubmit = async(event) => {
    event.preventDefault();
    const x=await loginValidation(data)
   if(!x.password && !x.email){
    // call the function to post data to backend
    loginuser(data)
   }
   
  };
  const loginuser=async(data)=>{
    return axios.post('https://emerald-pangolin-wrap.cyclic.app/api/users/login',{
     email:data.email,
     password:data.password
    })
    .then((res)=>{
       return alert(res.data.msg),
       localStorage.setItem("token",res.data.token),
       navigate("/profile")
    })
    .catch((err)=>{
     return alert(err.response.data.err)
    })
}

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      width={{ base: '90%', md: '30%' }}
      mx="auto"
      marginTop="100px"
    >
      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg"  margin={"10px"}isFullWidth>
          Login
        </Button>
       
      </form>
      <span className='span'>Create New Account? <Link to="/" style={{color:"red"}}> Register Now</Link> </span>
    </Box>
  );
}

export default LoginForm;
