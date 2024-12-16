import './Card.css'


export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.image} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title ellipsis">{props.item.title}</h5>
                    <p className="card-text">Categoria: {props.item.category}</p>
                </div>
                <div>
                    <p className="card-text bold fs-4 fw-bold">R$: {props.item.price}</p>
                    <button type="button" className="btn btn-secondary">Comprar</button>
                </div>
                
            </div>
        </div>
    )
}