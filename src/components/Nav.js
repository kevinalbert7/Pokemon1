import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Flex, Button } from '@chakra-ui/react';

class Nav extends Component {
  render() {
    return (
      <>
            <Flex height="10vh" textColor="white" background="gray.800" alignItems="center" justifyContent="right">
                <Flex mr={8}>
                  <Link to="/">
                    <Button variant="ghost">
                      Home
                    </Button>
                    </Link>
                </Flex>
                <Flex mr={8}>
                  <Link to="/login">
                    <Button variant="ghost">
                      Login
                    </Button>
                  </Link>
                </Flex>
            </Flex>
      </>
 
    )
  }
}

export default Nav