import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login, register } from '../services/UserService';

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

    return (
        <div>
            <h1>PokeDex</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={ onSubmitHandler }>
                <p>
                    <label>Email: </label>
                    <input style={ borderStyle } type='text' name='email' onChange={ handleChange } />
                </p>
                <p>
                    <label>Password: </label>
                    <input style={ borderStyle } type='password' name='password' onChange={ handleChange } />
                </p>
                {
                    isRegistered ?
                        <>
                            <p>
                                <label>ConfirmPassword: </label>
                                <input style={ borderStyle } type='password' name='confirmPassword' onChange={ handleChange } />
                            </p>
                            <button style={ borderStyle } >Register</button>
                            <button 
                                style={ borderStyle } 
                                onClick={() => {
                                    setErrors([]);
                                    navigate('/');
                                }}
                                >Back</button>
                        </>
                        : <button style={ borderStyle } >Login</button>
                }
                <hr />
                { !isRegistered && <Link to="/register" onClick={() => setErrors([])}>Not a user? Register!</Link>}
                
            </form>


        </div>
    )
}

export default UserForm;