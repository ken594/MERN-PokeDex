import React from 'react'

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
        <div>
            <p>No.{index}</p>
            <img src={imageUrl} alt={pokemon.name}/>
            {/* Captalize the first letter and make sure the rest are lowerletters */}
            <br />
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}
        </div>
    )
}

export default PokemonCard