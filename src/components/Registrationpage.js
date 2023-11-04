import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  span,
  
} from '@chakra-ui/react';
import {useNavigate,Link} from "react-router-dom"
import axios from "axios"

function RegistrationForm() {

    const initialdata=
        {
            fullName: '',
            password: '',
            email: '',
            phoneNumber: '',
            city: '',
            state: '',
            address: '',
            country:"",
            zipCode: '',
            dateOfBirth: '',
            securityQuestion: '',
            securityAnswer: '',
          
    }
   
  const [formData, setFormData] = useState(initialdata);
  const [file,setfile]=useState()
  const navigate= useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
         await axios.post('https://emerald-pangolin-wrap.cyclic.app/api/users/register', formData) .then( (response)=> {
            alert("user registered successfully")
             navigate("/login")

             window.location.reload();
           });
    
      } catch (error) {
      alert("user exist already or please enter correct email full name and password must be 8 minimum charecters it must and include uppercase symbol and phone numbers must be 10 digits")
      }
    
  };
  
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      width={{ base: '70%', md: '40%' }}
      mx="auto"
     
    >
      <Heading as="h2" size="lg" textAlign="center" mb={3}>
        Registration Form
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <FormControl isRequired>
            <FormLabel>fullName</FormLabel>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="Confirm Password"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>State</FormLabel>
            <Input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Zip Code</FormLabel>
            <Input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Zip Code"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Country</FormLabel>
            <Input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Zip Code"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Date of Birth</FormLabel>
            <Input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Security Question</FormLabel>
            <Input
              type="text"
              name="securityQuestion"
              value={formData.securityQuestion}
              onChange={handleChange}
              placeholder="Security Question"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Security Answer</FormLabel>
            <Input
              type="text"
              name="securityAnswer"
              value={formData.securityAnswer}
              onChange={handleChange}
              placeholder="Security Answer"
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="lg" isFullWidth>
            Register
          </Button>
        </Stack>
      </form>
      <span className='span'>Already Register?  <Link to="/login" style={{color:"red"}}>Login</Link></span>
    </Box>
  );
}

export default RegistrationForm;
