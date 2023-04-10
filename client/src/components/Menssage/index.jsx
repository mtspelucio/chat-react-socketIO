import React from 'react';
import { Container } from './styles';

export default function Menssage({ message, socket }) {
  let author
  message.authorId == socket.id ? author = true : author = false
  console.log(author);

  return (
    <Container author={author}>
      <span author={author}>
        <strong>{ message.author }</strong>
        <p>{ message.text }</p>
      </span>
    </Container>
  );
}