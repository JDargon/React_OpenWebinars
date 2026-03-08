import { useEffect, useState } from 'react';
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import HeaderComponnet from './components/HeaderComponent'
import Login from './components/Login';
import MovieList from './components/MovieList';
import AnimalList from './components/AnimalList';
import MemeList from './components/MEmeList';

function App() {

  /*
  useEffect(()=>{
    console.log("Ejecución cada vez que se renderiza el componente raiz")
  })
  */

  const [number, setNumber] = useState(0);
  const [myValue, setMyValue] = useState("");
  const [greetings, setGreetings] = useState("BienVenidos a mi web!")
  const [user, setUser] = useState({})
  let myPlaceholder = "Escribe aquí"
  const [showMovies, setShowMovies] = useState(true);

  /*
   useEffect(()=>{
    console.log("Ejecución con cada cambio de la variable reactiva user")
  }, [user])
  */

  const links = {
    home: "Home",
    blog: "Blogs",
    news: "News",
    contact: "Contact us"
  };

  const sayHello = () => {
    console.log("Hello!");
  }

  const handleChange = (e) => {
    setMyValue(e.target.value)
  }

  const addOne = () => {
    setNumber(number + 1);
    console.log(number);
  }

  const login = (userInfo) => {
    //console.log(userInfo);
    setUser(userInfo)
  }

  return (
    <>
      <HeaderComponnet saludos={greetings} links={links} />

      <main className='main-content' >

        {user.username && <h2 onClick={sayHello}>Hola {user.username}</h2>}

        <Login handleLogin={login} />

        <h2 onClick={addOne}>Number: {number}</h2>
        <input value={myValue} type='text' placeholder={myPlaceholder} onChange={handleChange} />

        <br />
        <br />
        <ButtonComponent />

        <button onClick={()=> setShowMovies(!showMovies)}>Toogle Movies</button>

        {showMovies && <MovieList/>}

        <AnimalList/>

        <MemeList/>

      </main>

    </>
  )
}

export default App
