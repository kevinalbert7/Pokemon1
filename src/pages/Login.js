import React from 'react'

import { useFormik } from "formik"
import * as Yup from 'yup'

import { Flex, Heading, Input, Button } from '@chakra-ui/react';

const Login = () => {

    const formik = useFormik({
        initialValues: {
          username: "",
          password: ""
        },

        onSubmit: values => {
          console.log(values)
        },

        validationSchema: Yup.object().shape({
            username: Yup.string()
                .max(15, "username trop long")
                .required("username est requis"),
            password: Yup.string()
                .min(6, "Password trop court")
                .required("Password est requis")
        }),
        validateOnChange: false
    })
    
    return (
        <Flex height="100vh" background="gray.800" alignItems="center" justifyContent="center">
            <Flex direction="column" p={12}> 
                <Heading mb={6}>username</Heading>
                <Input 
                name="username"
                variant="filled" 
                mb={3} 
                type="text" 
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                />
                <Heading mb={6}>password</Heading>
                <Input 
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                variant="filled" 
                mb={6} 
                type="password" 
                />
                <Button textColor="gray.800" colorScheme="teal">Button</Button>
            </Flex>
        </Flex>
    );
  }
  
  export default Login
    
  
  
  