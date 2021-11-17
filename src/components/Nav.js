import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Flex, Heading } from '@chakra-ui/react';

class Nav extends Component {
  render() {
    return (
      <>
            <Flex height="10vh" textColor="white" background="gray.800" alignItems="center" justifyContent="right">
                <Flex mr={8}>
                  <Link to="/">Home</Link>
                </Flex>
                <Flex mr={8}>
                  <Link to="/login">Login</Link>
                </Flex>
            </Flex>
      </>
 
    )
  }
}

export default Nav