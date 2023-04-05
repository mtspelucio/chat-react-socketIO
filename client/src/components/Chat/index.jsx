import React, { useRef, useState, useEffect } from 'react';
import { Container } from './styles';

import Menssage from '../Menssage';

export default function Chat({ socket }) {

  const messageRef = useRef();
  const bottomRef = useRef();
  const [messageList, setMessageList] = useState([]);
  const [previousMessage, setPreviousMessage] = useState([]);

  useEffect(() => {
    socket.on('receive_message', data => {
      setMessageList(current => [...current, data])
    })

    socket.on('previous_message', messages => {
      setPreviousMessage(messages)
    })

    return () => socket.off('receive_message')
  }, [socket])

  useEffect(() => {
    scrollDown();
  }, [messageList])

  const handleSubmit = () => {
    const message = messageRef.current.value
    if(!message.trim()) return

    socket.emit('message', message)
    clearInput();
    focusInput();
  }

  const clearInput = () => {
    messageRef.current.value = ''
  }

  const focusInput = () => {
    messageRef.current.focus()
  }

  const getEnterKey = (e) => {
    if(e.key === 'Enter') handleSubmit();
  }

  const scrollDown = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  }
    
  return (
    <Container>
      <h1>BATE-PAPO</h1>
      <div className='chat'>
        {
          previousMessage.map((message, index) => (
            <Menssage index={index} message={message} />
          ))
        }
        {
          messageList.map((message, index) => (
            <Menssage index={index} message={message} />
          ))
        }
        <div ref={bottomRef} />
      </div>
      <div className='sendMessage'>
        <input type='text' ref={messageRef} onKeyDown={e => getEnterKey(e)} placeholder='Digite sua mensagem...'/>
        <button onClick={handleSubmit} >Enviar</button>
      </div>
    </Container>
  );
}