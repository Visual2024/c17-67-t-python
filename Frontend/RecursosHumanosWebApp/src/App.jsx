import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import MenuLateral from './Components/MenuLateral'
import './Styles/App.css'
import Perfil from './Pages/Perfil'

function App() {

  return (
    <>
      <Header />

        <Routes>
          <Route path='/perfildeusuario' element={<Perfil />} />
        </Routes>

      <MenuLateral />
    </>
  )
}

export default App
