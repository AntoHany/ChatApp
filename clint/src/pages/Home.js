import { Link } from "react-router-dom";
import Header from "../componant/Header";
import { getCookie } from '../helper/cookies'
import Login from "./Login";

import './Home.css'

function Text({name}){
  return(
    <div className="welcom-text container">
      <h3>Welcome {name} at the chat app, Anton Hany created this app for the purpose of learning, use zustand as a status manager, use WebSocket to make the web app interactive.</h3>
      <Link to='/public' className="background">
        chat now
      </Link>
    </div>
  )
}

function Home(){
  let cookie = getCookie('username');
  
  if (cookie === ''){
    return <Login />
  }
  return(
    <div className="home">
      <Header />
      <Text name={cookie}/>
    </div>
  ) 
}
export default Home;