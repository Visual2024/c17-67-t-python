import React from 'react'
import menuLateral from '../Styles/MenuLateral.module.css'

const MenuLateral = () => {


  return (
    <div className={menuLateral.container}>
        <ul>
            <li><a href="/perfildeusuario">Perfil</a></li>
            <li>Registros</li>
            <li>Beneficios</li>
        </ul>
    </div>
  )
}

export default MenuLateral