import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getAllPokeApi } from "../services/PokemonService"

export default function Pokemon() {

    const { id } = useParams()
    const [pokemonData, setPokemonData] = useState()

    useEffect(() => {
        getAllPokeApi(id)
            .then(res => setPokemonData(res.data))
            .catch(err => console.log(err))
    }, [])

    if (!pokemonData) return <h1>Loading...</h1>

    const background = {
        backgroundImage : `url(${pokemonData.sprites.other.dream_world.front_default})`,
        width: '500px',
        height: '500px',
        backgrounPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
    }

    const pokeCard = {
        width: '100vw',
        height: '100vh'
    }

    console.log(pokemonData)
    return (
        <div className="flex justify-center items-center" style={pokeCard}>
            <div className="flex justify-center items-center gap-52">
                {/* LEFT SIDE */}
                <div style={background} className="flex-1"> 
                    
                </div>

                {/* RIGHT SIDE */}
                <div className="flex-1">
                    <p className="text-white text-5xl font-bold">This is just some text to get the formatting right</p>
                </div>
            </div>
        </div>
    )
}