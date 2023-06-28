import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import styles from "../styles/global.module.css"
import PokemonCard from './PokemonCard';


export default () => {
    const [message, setMessage] = useState("Loading...")
    // useEffect(() => {
    //     axios.get("http://localhost:8000/api")
    //         .then(res => setMessage(res.data.message))
    // }, []);
    return (
        <>
            <div className={ styles.pokemon_logo }>
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
                className={ styles.pokemon_logo_img }
                alt='pokemon_logo_img'>
                </motion.img>
            </div>

            <div className={ styles.pokemon_container }>
                <PokemonCard />
            </div>
        </>
    )
}