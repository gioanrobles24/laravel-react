import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
            <div class="collapse navbar-collapse" id="navbarsExample09">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                <Link class="nav-link" to="/product/index">Productos  </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/products/form">Crear producto</Link>
                </li>
                <li class="nav-item">
                     <Link class="nav-link" to="/comments/index">Agregar Comentario </Link>
                </li>
            </ul>
            </div>
        </nav>      
    )
}

export default Nav