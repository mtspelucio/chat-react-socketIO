import React, { useRef, useState, useEffect } from 'react';
import { Container } from './styles';

import Menssage from '../Menssage';
import Users from '../Users';

import Send from '../../assets/send.png'

export default function Chat({ socket }) {

  const messageRef = useRef();
  const bottomRef = useRef();
  const [messageList, setMessageList] = useState([]);
  const [previousMessage, setPreviousMessage] = useState([]);
  const [connectUsers, setConnectUsers] = useState([]);

  useEffect(() => {
    socket.on('receive_message', data => {
      setMessageList(current => [...current, data])
      // console.log(socket)
    })

    socket.on('previous_message', messages => {
      setPreviousMessage(messages)
    })

    socket.on('connect_users', users => {
      setConnectUsers(users)
    })
    console.log(socket)

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
      <div className='users'>
        <Users key={12} user={"teste1"} />
        {
          connectUsers.map((user, index) => (
            <Users key={index} user={user} />
          ))
        }
      </div>
      <div className='chatContainer'>
        <div className='chat'>
          {
            previousMessage.map((message, index) => (
              <Menssage key={index} message={message} />
            ))
          }
          {
            messageList.map((message, index) => (
              <Menssage key={index} message={message} />
            ))
          }
          <div ref={bottomRef} />
        </div>
        <div className='sendMessage'>
          <input type='text' ref={messageRef} onKeyDown={e => getEnterKey(e)} placeholder='Digite sua mensagem...'/>
          <button onClick={handleSubmit} ><img src={Send} alt='icone de enviar' /></button>
        </div>
      </div>
      
    </Container>
  );
}