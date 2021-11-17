import { useState, useEffect } from 'react'

import Button from '../components/Button'

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
            <p>HOME</p>
            <Button handleClick={() => handleChangePokemon()}/>
            { pokemon &&
            <div>
                <p>{pokemon.image}</p>
                <p>{pokemon.name}</p>
                <p>{pokemon.height}</p>
                <p>{pokemon.weight}</p>
                {/* <p>{pokemon.types}</p> */}
            </div>
            }
        </>
    )
}

export default Home