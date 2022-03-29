import {useState} from 'react'
import useLetras from '../hooks/useLetras'

const Formulario = () => {

    const { setAlerta , busquedaLetra} = useLetras()

    const  [busqueda, setBusqueda ] = useState({
        artista: '',
        cancion: '',
    })

    const handleChange = (e) => {
        setBusqueda({
            ...busqueda ,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(Object.values(busqueda).includes('')) {
            setAlerta('Coloca Nombe de Artista y Cancion')
            return
        }

        busquedaLetra(busqueda)
    }



  return (
    <>
        <form
        onSubmit={handleSubmit}
        >
            <legend>Busca por Artista y por cancion</legend>

            <div className="form-grid">
                <div>
                   <label>Artista</label>
                   <input
                    type="text"
                    name='artista'
                    value={busqueda.artista} 
                    placeholder='Nombre del Artista'
                    onChange={handleChange}
                     />
                </div>

                <div>
                   <label>Cancion</label>
                   <input
                    type="text"
                    name='cancion'
                    value={busqueda.cancion} 
                    placeholder='Nombre de la Cancion'
                    onChange={handleChange}
                     />
                </div>

                <input 
                type="submit" 
                value='Buscar'
                />

            </div>
        </form>
    </>
  )
}

export default Formulario