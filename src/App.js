import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header.js';
import MsgErro from './components/msgErro/MsgErro.js';
import ListaProdutos from './components/listaProdutos/ListaProdutos.js';
import MsgCarregando from './components/msgCarregando/MsgCarregando.js';

function App() {
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
      <Header />
      {
      erro ? 
      (<MsgErro erroStatus={respStatus} />) : 
      respAPI.length === 0 ? 
      (<MsgCarregando />) : 
      (<ListaProdutos produtos={respAPI} />)
      }
    </>
  );
}

export default App;