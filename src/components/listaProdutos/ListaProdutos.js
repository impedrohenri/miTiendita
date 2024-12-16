import './ListaProdutos.css'
import Card from '../card/Card'

export default function ListaProdutos({produtos}) {
    return (
    <>
        <div className='lista d-flex flex-wrap'>
            {produtos.map(produto => <Card key={produto.id} item={produto} />)}
        </div>
    </>
    )
}