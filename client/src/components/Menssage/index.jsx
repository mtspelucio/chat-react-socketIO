import React from 'react';
import { Container } from './styles';

export default function Menssage({ message }) {
  return (
    <Container>
      <strong>{ message.author }</strong>
      <p id={message.authorId} >{ message.text }</p>
    </Container>
  );
}