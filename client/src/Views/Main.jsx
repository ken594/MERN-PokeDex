import { motion } from 'framer-motion'
import PokemonList from './PokemonList';

export default () => {

    const pokemon_logo = {
        width: '500px'
    }

    return (
        <>
            <div className='flex justify-center item-center'>
                <motion.img 
                src='https://i.pinimg.com/originals/fd/18/c6/fd18c6d26d4d9d26a0bd9d1a2fb2bd04.png'
                initial={{
                    opacity: 0,
                    y: -500
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 8,
                    type: "spring",
                    stiffness: 30,
                    damping: 7
                }}
                style={pokemon_logo}
                alt='pokemon_logo_img'>
                </motion.img>
            </div>

            <div className='flex flex-wrap'>
                {/* <PokemonCard /> */}
                <PokemonList />
            </div>
        </>
    )
}