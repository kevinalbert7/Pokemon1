import React from 'react'

import { useFormik } from "formik"
import * as Yup from 'yup'

import { Flex, Form, FormControl, FormLabel, FormHelperText, Input, Button } from '@chakra-ui/react';

const Login = () => {

    const formik = useFormik({
        initialValues: {
          username: "",
          password: ""
        },

        handleSubmit: values => {
          console.log(values)
        },

        validationSchema: Yup.object().shape({
            username: Yup.string()
                .max(15, "username trop long")
                .required("username est requis"),
            password: Yup.string()
                .min(6, "Passwrd trop court")
                .required("Password est requis")
        }),
        validateOnChange: false
    })
    
    return (
        <Flex height="100vh" background="gray.800" alignItems="center" justifyContent="center">
            <Flex direction="column" p={12}> 
              
              {/* <Form onSubmit={formik.handleSumbit}>  */}
                    <FormControl width="45vh" id="username" isRequired>
                        <FormLabel mb={2} mt={5} textColor="white">Username</FormLabel>
                            <Input
                                name="username"
                                textColor="white"
                                type="text"
                                placeholder="Enter username"
                                value={formik.values.username}
                                onChange={formik.handleChange} />
                        {formik.errors.username && <FormHelperText>{formik.errors.username}</FormHelperText>}
                    </FormControl>

                    <FormControl  width="45vh" id="password" isRequired>
                        <FormLabel mb={2} mt={5} textColor="white">Password</FormLabel>
                            <Input
                                name="password"
                                textColor="white"
                                type="password" 
                                placeholder="Enter your password"
                                value={formik.values.password}
                                onChange={formik.handleChange} />
                        {formik.errors.password && <FormHelperText>{formik.errors.password}</FormHelperText>}
                    </FormControl>
                {/* </Form> */}
        
                <Button mt={4} type="submit" textColor="gray.800" colorScheme="teal">Button</Button>
            </Flex>
        </Flex>
    );
  }
  
  export default Login
    
  
  
  