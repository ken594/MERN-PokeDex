import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { getAll } from '../services/PokemonService';


const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getAll()
            .then(res => setPokemons(res.data.results))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
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