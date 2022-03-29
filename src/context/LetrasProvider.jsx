import { createContext, useState } from 'react'
import axios from 'axios'


const LetrasContext = createContext()

const LetrasProvider = ({children}) => {

    const [ alerta , setAlerta ] = useState('')
    const [ letra , setLetra ] = useState('')
    const [ cargando , setCargando ] = useState(false)

    const busquedaLetra = async (busqueda) => {
        setCargando(true)

        try {

            const { artista , cancion } = busqueda
            const url = `http://api.lyrics.ovh/v1/${artista}/${cancion}`
            const {data} = await axios.get(url)
            
            setLetra(data.lyrics);
            setAlerta('')
               
        
        } catch (error) {
            setAlerta('Cancion No Encontrada!')
        }

        setCargando(false)
    }


  return (

    <LetrasContext.Provider
        value={{
            alerta,
            setAlerta,
            busquedaLetra,
            letra,
            setLetra,
            setCargando,
            cargando
        }}
    >
        {children}
    </LetrasContext.Provider>
  )
}

export {
    LetrasProvider
} 

export default LetrasContext