import React from 'react';
import { Container } from './styles';

export default function Menssage({index, message}) {
  return (
    <Container key={index}>
      <strong>{ message.author }</strong>
      <p id={message.authorId} >{ message.text }</p>
    </Container>
  );
}