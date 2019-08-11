import React, { useState } from 'react';

import './styles.css'

import api from '../../services/api';

import logo from '../../assets/logo.svg';

export default function Login({ history }) {

    const [username, setUsername] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/devs', { username });

        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="logo tindev"/>
                <input 
                    placeholder="Digite seu usuário do github"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
                <button>Enviar</button>
            </form>
        </div>
    );  
}
