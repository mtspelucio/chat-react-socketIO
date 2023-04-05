import React, { useRef } from 'react';
import io from 'socket.io-client';

import { Container } from './styles';

export default function Join({ setSocket, setChatVisibility }) {

    const userNameRef = useRef();

    const handleSubmit = async () => {
        const userName = userNameRef.current.value
        if(!userName.trim()) {
            alert("Digite um nome")
            return
        } 
        const socket = await io.connect('http://localhost:3001');
        socket.emit('set_username', userName)
        setSocket(socket)
        setChatVisibility(true)
    }

    const getEnterKey = (e) => {
        if(e.key === 'Enter') handleSubmit();
    }

    return (
        <Container>
            <h1>CONECT</h1>
            <input type='text' ref={ userNameRef } onKeyDown={e => getEnterKey(e)} placeholder='Nome'/>
            <button onClick={ handleSubmit }>ENTRAR</button>
        </Container>
    );
}