import './App.css'
import ButtonComponent from './components/ButtonComponent'
import HeaderComponnet from './components/HeaderComponent'

function App() {
  return (
    <>
      <HeaderComponnet />

      <main className='main-content'>
        <h1>Hola a todos !</h1>
        <ButtonComponent />
      </main>

    </>
  )
}

export default App
