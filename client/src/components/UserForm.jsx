import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login, register } from '../services/UserService';
import '../styles/global.module.css'

const UserForm = (props) => {
    const { isRegistered }= props;
    const initialData = {
        email: "",
        password: "",
        confirmPassword: ""
    };
    const navigate = useNavigate();

    const borderStyle = {
        border: '2px groove'
    };

    const [user, setUser] = useState({...initialData});
    const [errors, setErrors] = useState([]);

    const handleChange = e => {
        const name = e.target.name;

        setUser(current => ({...current, [name]: e.target.value}));
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        isRegistered
            ? register(user)
                .then(res => navigate('/pokemon'))
                .catch(err => {
                    console.log(err)
                    const errorResponse = err.response.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                })
            : login(user)
                .then(res => navigate('/pokemon'))
                .catch(err => {
                    console.log(err.response.status)
                    if (err.response.status === 400) {
                        setErrors(["Incorrect Email/Password!"])
                    }
                });
    }

    const backgroundImg = {
        backgroundImage : "url('https://thumbs.gfycat.com/FrenchFastJaguar-max-1mb.gif')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }

    const formBackground = {
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(5px)',
    }

    const red = {
        color: 'red'
    }

    return (
        <div className='flex items-center justify-center' style={backgroundImg}>
        <div className='p-20 rounded-2xl' style={formBackground}>
            <h1 className='text-5xl font-extrabold mb-4'>PokeDex</h1>
            {errors.map((err, index) => 
            <p className='text-xl font-semibold' key={index} style={red}>
                {err}
            </p>)}
            <form onSubmit={ onSubmitHandler } className='flex flex-col gap-5'>
                <p className='text-2xl font-semibold'>
                    <label>Email: </label>
                    <input style={ borderStyle } type='text' name='email' onChange={ handleChange } className='w-full p-2'/>
                </p>
                <p className='text-2xl font-semibold'>
                    <label>Password: </label>
                    <input style={ borderStyle } type='password' name='password' onChange={ handleChange } className='w-full p-2'/>
                </p>
                {
                    isRegistered ?
                        <>
                            <p className='text-2xl font-semibold'>
                                <label>Confirm Password: </label>
                                <input style={ borderStyle } type='password' name='confirmPassword' onChange={ handleChange } className='w-full p-2'/>
                            </p>
                            <button style={ borderStyle } className='text-2xl font-semibold hover:bg-white'>Register</button>
                            <button 
                                style={ borderStyle } 
                                onClick={() => {
                                    setErrors([]);
                                    navigate('/');
                                }}
                                className='text-2xl font-semibold hover:bg-white'
                                >Back</button>
                        </>
                        : <button style={ borderStyle } className='text-2xl font-semibold hover:bg-white'>Login</button>
                }
                <hr />
                { !isRegistered && <Link to="/register" onClick={() => setErrors([])} className='text-center hover:text-white'>Not a user? Register!</Link>}
                
            </form>


        </div>
        </div>
    )
}

export default UserForm;