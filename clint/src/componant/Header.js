import { Link } from "react-router-dom";
import { useThemeValue } from "../store/store";
import "./Header.css"


function Header(){

  const theme = useThemeValue((state) => (state.LightTheme));
  const changeTheme = useThemeValue((state) => (state.changeTheme));
  
  if(!theme){
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  } else{
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  }
  
  return(
    <header className="container">
      <h2>Chat App</h2>
      <ul>
        <Link to={'/'}>home</Link>
        <Link to={'/public'}>public Chat</Link>
      </ul>
      <button className="background" onClick={changeTheme}>{theme ? "dark" : "light"}</button>
    </header>
  )
}
export default Header;