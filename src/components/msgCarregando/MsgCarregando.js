import './MsgCarregando.css'
import imgCarregando from '../../assets/images/loading2.gif'

export default function MsgCarregando(){
    return (
        <div className='content'>
            <img src={imgCarregando} className='imgCarregando' alt='gif carregando'/>
            <h1 className=''>Carregando...</h1>
        </div>
    )
}