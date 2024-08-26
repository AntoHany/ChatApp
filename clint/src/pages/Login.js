import { useState } from "react";

import './Login.css'

function Login(){
  
  const [name, SetName] = useState('');

  function handleLoginClick(e){
    e.preventDefault();
    if(name){
      document.cookie = `username=${name};`;
      document.location.reload()
    }
  }
  return(
    <div className="login container">
      <h1>login</h1>
      <div className='bar'>
        <input type='text' placeholder='Type Your Name' onChange={(e)=>{
          SetName(e.target.value);
        }}/>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  )
}
export default Login; 