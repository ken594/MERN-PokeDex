import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { getAll } from '../services/PokemonService';
import styles from "../styles/global.module.css"


const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getAll()
            .then(res => setPokemons(res.data.results))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='flex flex-wrap gap-10 mx-10 text-center'>
            {
                pokemons.length
                    ? pokemons.map( (pokemon,index) => {
                        return (
                            <PokemonCard key={ pokemon.name } pokemon={ pokemon } index={ index+1 }/>
                        )
                    } )
                    : null
            }
        </div>
    )
};

export default PokemonList;