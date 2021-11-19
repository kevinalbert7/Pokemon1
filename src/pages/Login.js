import React from 'react'
import { UserContext } from '../contexts/User';
import { useFormik } from "formik"
import * as Yup from 'yup'
import { 
    Flex, 
    FormControl, 
    FormLabel, 
    FormErrorMessage, 
    Input, 
    Button 
} from '@chakra-ui/react';

const Login = () => {

    const formik = useFormik({
        initialValues: {
          username: "",
          password: ""
        },

        onSubmit: values => {
            const user = useContext(userContext)
            console.log("onSubmit values ", values)
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
    console.log("state de isLogged: " isLogged)
    return (
        <Flex height="100vh" background="gray.800" alignItems="center" justifyContent="center">
            <Flex direction="column" p={12}> 
              
              <form onSubmit={formik.handleSubmit}> 
                    <FormControl width="45vh" id="username" isInvalid={formik.errors.username}>
                        <FormLabel mb={2} mt={5} textColor="white">Username</FormLabel>
                            <Input
                                name="username"
                                textColor="white"
                                type="text"
                                placeholder="Enter username"
                                value={formik.values.username}
                                onChange={formik.handleChange} 
                            />
                        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                    </FormControl>

                    <FormControl  width="45vh" id="password" isRequired>
                        <FormLabel mb={2} mt={5} textColor="white">Password</FormLabel>
                            <Input
                                name="password"
                                textColor="white"
                                type="password" 
                                placeholder="Enter your password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                    </FormControl>
                    <Button mt={4} type="submit" textColor="gray.800" colorScheme="teal">Button</Button>
                </form>
        
            </Flex>
        </Flex>
    );
  }
  
  export default Login
    
