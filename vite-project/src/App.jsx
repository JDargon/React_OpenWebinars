import { useState } from 'react';
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import HeaderComponnet from './components/HeaderComponent'

function App() {

  //let number = 0;

  const [number, setNumber] = useState(0);
  let myPlaceholder = "Escribe aquí";

  const sayHello = () => {
    console.log("Hello!");
  }

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  const addOne = () => {
    //number++;
    setNumber(number + 1);
    console.log(number);
  }

  return (
    <>
      <HeaderComponnet />

      <main className='main-content'>
        <h2 onClick={sayHello}>Hola a todos !</h2>
        <h2 onClick={addOne}>Number: {number}</h2>
        <input type='text' placeholder={myPlaceholder} onChange={handleChange} />

        <br />
        <br />
        <ButtonComponent />
      </main>

    </>
  )
}

export default App
