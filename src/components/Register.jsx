import React, { useState } from 'react'
import axios from "axios";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const Register = async(e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });

        } catch (error) {
            
        }
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4-desktop">
                        <form onSubmit={ Register }className='box'>
                            <div className="field mt-5">
                                <label className="label">Name</label>
                                <div className="controls">
                                    <input type="text" className="input" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field mt-5">
                                <label className="label">Email</label>
                                <div className="controls">
                                    <input type="text" className="input" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field mt-5">
                                <label className="label">Password</label>
                                <div className="controls">
                                    <input type="text" className="input" placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field mt-5">
                                <label className="label">Confirm Password</label>
                                <div className="controls">
                                    <input type="text" className="input" placeholder='*****' value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field mt-5">
                                <button className="button is-success is-fullwidth">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Register