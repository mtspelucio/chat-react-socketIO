import React from 'react';
import { Container } from './styles';
import User from '../../image/user.png'

export default function Users({ user }) {
  return (
    <Container>
        <img src={User} alt='Usuário' />
        <p>{ user.name }</p>
    </Container>
  );
}