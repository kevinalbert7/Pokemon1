import { useState, useEffect } from 'react'

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
    
    
    console.log(pokemon)

    if ( !pokemon ){
        return (null)
    }
    return (
        <div>
            <p>HOME</p>
           <p> {pokemon.name}</p>

     
        </div>
    )
}

export default Home