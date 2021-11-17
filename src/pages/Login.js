import React from 'react'

import { useFormik } from "formik"
import * as Yup from 'yup'

import { ChakraProvider } from "@chakra-ui/react"
import { Flex, Heading, Input, Button } from '@chakra-ui/layout';

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
        <div>
            <p>Login</p>
            <form onSubmit={formik.handleSubmit}>
                <input
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />
                {formik.errors.username && <p>{formik.errors.username}</p>}
                <br />
                <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                {formik.errors.password && <p>{formik.errors.password}</p>}
                <br />
                <button type="submit">Button</button>
            </form>
        </div>
    );
  }
  
  export default Login
    
  
  
        // <ChakraProvider>
        //     <Flex height="100vh" alignItems="center" just="center">
        //         <Flex direction="column" background="gray.100" p={12} rounded={6}> 
        //             <Heading mb={6}>LOGIN</Heading>
        //             <Input placeholder="Enter your username" variant="filled" mb={3} type="text" />
        //             <Input placeholder="Enter your password" variant="filled" mb={6} type="password" />
        //             <Button colorScheme="teal">Button</Button>
        //         </Flex>
        //     </Flex>
        // </ChakraProvider>