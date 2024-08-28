import { useEffect, useRef, useState } from 'react';
import { getCookie } from '../helper/cookies';
import axios from 'axios';
import { socket } from '../socket';

import './ChatBox.css';
import scrollToBottom from '../helper/scrollToBottom';
import getTime from '../helper/GetTime';
import { useURL } from '../store/store';

function ChatBox(){
  const form = useRef();
  const chatBox = useRef();
  const [allMessageData, setMessageData] = useState([]);
  const userName = getCookie('username');
  const [message, setMessage] = useState('');
  const time = getTime();

  function SocketServer(data){
    socket.emit('sendMessage', data);
  }

  useEffect(() => {
    socket.on('connect', () => {
        console.log('Connected to server');
    });

    socket.on('receiveMessage', (msg) => {
        setMessageData((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
        socket.off('connect');
        socket.off('receiveMessage');
    };
  }, []);

  
  async function handleClickSend(e){
    e.preventDefault();
    const messageData = {
      userName: userName,
      body: message,
      time: time
    }
    if (message !== ''){
      try {
        await axios.post(`${useURL}/message`, messageData);
        SocketServer(messageData);
      }catch (error){
        console.log(`data not send sucsses => ${error}`);
      }finally {
        form.current.value = '';
        setMessage('');
      }
    }
  }

  useEffect(() => {
    async function getData(){
      try {
        await fetch(`${useURL}/message`)
        .then((res)=>res.json())
        .then((json)=> setMessageData(json));        
      } catch (error){
        console.log(`data can't get sucsses => ${error}`);
      }
    }
    getData();
  },[]);

  useEffect(() => {
    scrollToBottom(chatBox);
  })
  
  return(
    <div className='chat-box container'>
      <ul id='chatBox' ref={chatBox}>
        {/* class name [me] & [chat-background] */}
        {allMessageData.map((m)=>{
          if(m.userName === userName){
            return(
              <li className='me'>
                <span className='message'>{m.body}</span>
                <span className='time'>{m.time}</span>
              </li>
            )
          } else{
            return(
              <li className='chat-background'>
                <span className='username'>{m.userName}:</span>
                <span className='message'>{m.body}</span>
                <span className='time'>{m.time}</span>
              </li>
            )
          }
        })}
      </ul>
      <form className='bar'>
        <input ref={form} type='text' placeholder='Send Message' onChange={(e)=>{
          setMessage(e.target.value);
        }}/>
        <button className='background' type='submit' onClick={handleClickSend}>Send</button>
      </form>
    </div>
  )
}

export default ChatBox;