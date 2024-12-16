import './Header.css'
import vasalirelsol from '../../assets/images/vasalirelsol.png'
import pesquisar from '../../assets/images/pesquisar.png'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">

                <a className="navbar-brand" href="./">
                    <img src={vasalirelsol} className='imgLogo' alt="logo" width="30" height="24" /> <span>miTiendita</span>
                </a>

                <button className="navbar-toggler px-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="d-flex ms-auto mt-lg-0 mt-2" role="search">
                        <input className="form-control me-2" type="search" placeholder="Pesquisar produto" aria-label="Search" />
                        <button className="btn btn-outline-success px-3" type="submit">
                            <img src={pesquisar} className='imgPesquisar align-self-center' alt='pesquisar'/>
                        </button>
                    </form>
                </div>
            </div>
        </nav>

    )
}