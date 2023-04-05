import React, { useRef } from 'react';
import io from 'socket.io-client';

import { Container } from './styles';

export default function Join({ setSocket, setChatVisibility }) {

    const userNameRef = useRef();

    const handleSubmit = async () => {
        const userName = userNameRef.current.value
        if(!userName.trim()) return
        const socket = await io.connect('http://localhost:3001');
        socket.emit('set_username', userName)
        setSocket(socket)
        setChatVisibility(true)
    }

    return (
        <Container>
            <h1>CONECT</h1>
            <input type='text' ref={ userNameRef } placeholder='Nome'/>
            <button onClick={ handleSubmit }>ENTRAR</button>
        </Container>
    );
}