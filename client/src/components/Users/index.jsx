import React from 'react';
import { Container } from './styles';
import User from '../../assets/user.png';

export default function Users({ user, socket }) {
  let author
  user.id == socket.id ? author = true : author = false
  return (
    <Container author={author}>
        <img src={User} alt='Usuário' />
        <p>{ user.name }</p>
    </Container>
  );
}