import React from 'react'
import Formulario from './Formulario'
import useLetras from '../hooks/useLetras'
import Alerta from './Alerta'
import Letra from './Letra'
import Cargando from './Cargando'

const AppLetras = () => {

    const { alerta , letra , cargando } = useLetras()
  return (
    <>
        <header> Busqueda de Letras de Canciones</header>

        <Formulario />

        <main>
         {cargando && <Cargando />}

          { alerta ? <Alerta>{alerta}</Alerta> : 
            letra ? <Letra /> :
            <p className='text-center'>Busca letras de tus artistas favoritos</p> }
          
        </main>
    </>
  )
}

export default AppLetras