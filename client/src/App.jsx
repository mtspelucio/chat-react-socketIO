import { useState } from 'react'

import Join from './components/Join';
import Chat from './components/Chat';

export default function App() {
  const [chatVisibility, setChatVisibility] = useState(false);
  const [socket, setSocket] = useState(null);

  return (
    <div className="App">
      { chatVisibility ? <Chat socket={socket} /> : <Join setSocket={setSocket} setChatVisibility={setChatVisibility} /> }
    </div>
  )
}