import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react'
  import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
  
  
  
 
  
  const NavLink = (props) => {
    const { children } = props
    return (
      <Box
        as="a"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
      </Box>
    )
  }
  
  
  
  
export const Profilepage = () => {
    const [bag,Setdata]=useState("")
    const navigate=useNavigate()

useEffect(()=>{
    if(!localStorage.getItem("token")){
        navigate("/login")
    }
})



    const getnotes=()=>{
        axios({
            method: 'get',
            url: "https://emerald-pangolin-wrap.cyclic.app/api/users/get-current-user",
            headers:{
                "Content-type":"application/json",
                "Authorization":localStorage.getItem("token")
              }
          })
       
        .then((res)=>{
            Setdata(res.data.data)
           
           
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getnotes()
      
        },[])
    
        console.log(bag)
    const handleLogout = () => {
        localStorage.clear();
        navigate("/login")
      
      };

      const { isOpen, onOpen, onClose } = useDisclosure()
    
   
    return (
        <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Avatar
                  size={'sm'}
                  width={"130px"}
                  src={
                    'https://neokredwebsite.s3.ap-south-1.amazonaws.com/svg/neokred_logo.svg'
                  }
                /></Box>
           
          </HStack>
          <Flex alignItems={'center'}>
          <Button
              variant={'solid'}
              colorScheme={'yellow'}
              size={'sm'}
              mr={10}
              width={"120px"}
              height={"50px"}
              fontSize={"20px"}
             >
              {bag.fullName}
            </Button>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}
              onClick={handleLogout}>
              Log out
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        
      </Box>

      <Box p={4} marginLeft={"500px"} marginTop={"100px"}>
      <table style={{border:"1px solid black"}}>
        <tbody style={{border:"1px solid black"}}>
          <tr style={{border:"1px solid black"}}>
            <td>Full Name:</td>
            <td>{bag.fullName}</td>
          </tr>
          <tr style={{border:"1px solid black"}}>
            <td>Email:</td>
            <td>{bag.email}</td>
          </tr>
          <tr style={{border:"1px solid black"}}>
            <td>Date of Birth:</td>
            <td>{bag.dateOfBirth}</td>
          </tr>
          <tr style={{border:"1px solid black"}}> 
            <td>Phone Number:</td>
            <td>{bag.phoneNumber}</td>
          </tr>
          <tr style={{border:"1px solid black"}}>
            <td>Address:</td>
            <td>{bag.address}</td>
          </tr>
          <tr style={{border:"1px solid black"}}>
            <td>City:</td>
            <td>{bag.city}</td>
          </tr>
          <tr style={{border:"1px solid black"}}>
            <td>State:</td>
            <td>{bag.state}</td>
          </tr>
          <tr style={{border:"1px solid black"}}>
            <td>Zip Code:</td>
            <td>{bag.zipCode}</td>
          </tr>
          <tr style={{border:"1px solid black"}}>
            <td>Country:</td>
            <td>{bag.country}</td>
          </tr>
          <tr style={{border:"1px solid black"}}>
            <td>Security Question:</td>
            <td>{bag.securityQuestion}</td>
          </tr>
          <tr>
            <td>Security Answer:</td>
            <td>{bag.securityAnswer}</td>
          </tr>
        </tbody>
      </table>
      </Box>
    </>
  )
      
}
