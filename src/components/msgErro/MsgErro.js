import './MsgErro.css'
import UVSTi from '../../assets/images/un_verano_sin_ti.png'

export default function MensagemErro(props){
    return (
        <div className='content'>
            <img src={UVSTi} className='imgErro' alt='imagem erro'/>
            <h1 className=''>Não foi possível carregar os recursos. <br/>Erro {props.erroStatus} </h1>
        </div>
    )
}