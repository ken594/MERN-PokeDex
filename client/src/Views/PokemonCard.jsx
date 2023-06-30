import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { getAllPokeApi } from '../services/PokemonService';
import styles from "../styles/global.module.css"
import "../index.css"
import "../styles/global.module.css"

const PokemonCard = (props) => {
    const { pokemon, index } = props;

    const [pokeApi, setPokeApi] = useState()

    const [pokemonColor, setPokemonColor] = useState()

    // handle image url
    // const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index+1}.png?raw=true`;
    var imageUrl;
    if (index === 29) {
        imageUrl = `https://projectpokemon.org/images/normal-sprite/nidoran_f.gif`;
    } else if (index === 32) {
        imageUrl = `https://projectpokemon.org/images/normal-sprite/nidoran_m.gif`;
    } else if (index === 122) {
        imageUrl = `https://projectpokemon.org/images/normal-sprite/mr.mime.gif`;
    } else {
        imageUrl = `https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`;
    }

    useEffect(() => {
        getAllPokeApi(index)
            .then(res => {
                setPokeApi(res.data)
                setPokemonColor(res.data.types[0].type.name)
            })
            .catch(err => console.log(err))
    }, [])

    if (!pokeApi) return <h1>Loading</h1>

    const pokemon_card_style = {
        height: '400px',
        minWidth: '300px',
        border: '2px solid black',
        backgroundImage: `url(${pokeApi.sprites.other.dream_world.front_default})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const pokemon_gif = {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        height: '100%',
        width: '100%',
        backdropFilter: 'blur(6px)'
    }

    let pokemon_color = 'black'

    if (pokemonColor == 'grass' || pokemonColor == 'bug'){
        pokemon_color = 'green'
    }
    if (pokemonColor == 'fire'){
        pokemon_color = 'red'
    }
    if (pokemonColor == 'water'){
        pokemon_color = 'blue'
    }
    if (pokemonColor == 'flying'){
        pokemon_color = 'grey'
    }
    if (pokemonColor == 'poison'){
        pokemon_color = 'purple'
    }
    if (pokemonColor == 'electric'){
        pokemon_color = 'yellow'
    }
    if (pokemonColor == 'ground' || pokemonColor == 'rock'){
        pokemon_color = 'brown'
    }
    if (pokemonColor == 'fighting'){
        pokemon_color = 'crimson'
    }
    if (pokemonColor == 'psychic'){
        pokemon_color = 'pink'
    }
    if (pokemonColor == 'ghost'){
        pokemon_color = 'rebeccapurple'
    }

    let pokemon_name = {
        color: pokemon_color,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(3px)',
        borderRadius: '1rem',
        padding: '0.5rem'
    }




    return (
        <motion.div
            initial={{
                scale: 0
            }}
            animate={{
                scale: 1
            }}
            transition={{
                duration: 2,
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0 + index * 0.1
            }}
            className='flex flex-col justify-center items-center flex-1'
            style={pokemon_card_style}
        >
            <div style={pokemon_gif} className='flex flex-col justify-between items-center py-10'>
            <p className='text-4xl font-bold'>No.{index}</p>
            <img src={imageUrl} alt={pokemon.name}/>
            <br />
            {/* Captalize the first letter and make sure the rest are lowerletters */}
            <p className={`text-4xl font-extrabold ${pokemonColor}`} style={pokemon_name}> 
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}
            </p>
            </div>
        </motion.div>
    )
}

export default PokemonCard;