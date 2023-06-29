import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import styles from "../styles/global.module.css"

const PokemonCard = (props) => {
    const { pokemon, index } = props;

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
            className={ styles.pokemon_card }
        >
            <p>No.{index}</p>
            <img src={imageUrl} alt={pokemon.name}/>
            <br />
            {/* Captalize the first letter and make sure the rest are lowerletters */}
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}
        </motion.div>
    );
}

export default PokemonCard;