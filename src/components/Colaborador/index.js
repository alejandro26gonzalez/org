import './Colaborador.css'
import { MdDelete, MdFavoriteBorder, MdFavorite  } from "react-icons/md";

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const { colorPrimario, eliminarColaborador, like} = props

    return <div className='colaborador'>
        <MdDelete onClick={() => eliminarColaborador(id)} className='eliminar'/>
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <MdFavorite color='red' onClick={() => like(id)} className='favorite'/> : <MdFavoriteBorder onClick={() => like(id)} className='favorite'/>}
        </div>
    </div>
}

export default Colaborador