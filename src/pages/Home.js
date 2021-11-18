import { useState, useEffect } from 'react'

import { Flex, Button, Heading } from '@chakra-ui/react'

const Home = () => {
    // console.log(useState)
    const [pokemon, setPokemon] = useState(null)
    console.log(pokemon)
    console.log(setPokemon)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/1`)
        .then(response => response.json())
        .then(data => setPokemon(data) )
    }, [])

    const handleChangePokemon = () => {
    const min = 1
    const max = 151
    const random = Math.floor(Math.random() * (max - min + 1) + min)
        fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
            .then(response => response.json())
            .then(data => { setPokemon(data) })
    
    }
    
    console.log(pokemon)
    console.log(setPokemon)

    
    return (
        <>
        <Flex alignItems="center" background="gray.800" justifyContent="center">
            <Flex mb={4} width="45vh" height="80vh" textColor="white" fontSize="20px" direction="column" border="1px" borderColor="white" background="gray.800" p={12} rounded={6}> 
                    { pokemon &&
                    <div>
                        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
                        <Heading mt={4} textAlign="left">{pokemon.name}</Heading>
                        <p>Height: {pokemon.height}</p>
                        <p>Weight: {pokemon.weight}</p>
                        <div>
                            <h3 style={{fontWeight:"400"}}>Types:</h3> 
                            <ul>{pokemon.types.map(element => 
                                <li>{element.type.name}</li>)}
                            </ul>
                        </div>
                    </div>
                    }
            </Flex>
        </Flex>
        <Flex alignItems="center" background="gray.800" justifyContent="center">
            <Button onClick={() => handleChangePokemon()} textColor="gray.800" width="45vh" colorScheme="teal">Show random Pokemon</Button>
        </Flex>
        </>
    )
}

export default Home