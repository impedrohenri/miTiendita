import { useEffect, useState } from 'react';
import './ListaProdutos.css'
import Card from '../card/Card.js'
import MsgErro from '../msgErro/MsgErro.js';
import MsgCarregando from '../msgCarregando/MsgCarregando.js';


export default function ListaProdutos() {

    const [respAPI, setRespAPI] = useState([])
    const [respStatus, setRespStatus] = useState()
    const [erro, setErro] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => {
            setRespStatus(res.status)
            return res.json()
        }
        )
        .then(json => {
            setRespAPI(json)
        })
        .catch(error => setErro(error));
    }, [])

    return (
        <>
            {
            erro ? 
            (<MsgErro erroStatus={respStatus} />) : 
            respAPI.length === 0 ? 
            (<MsgCarregando />) : 
            (<>
                <div className='lista d-flex flex-wrap'>
                    {respAPI.map(produto => <Card key={produto.id} item={produto} />)}
                </div>
            </>)
            }
        </>
    )
}