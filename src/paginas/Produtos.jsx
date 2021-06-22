// import axios from "axios"
import http from '../http'

import { useEffect, useState } from "react"

const Produtos = () => {

  const [produtos, setProdutos] = useState([])

  // useEffect(() => {
  //   axios.get('http://localhost:8000/produtos')
  //     .then(response => setProdutos(response.data))
  // }, [])
  useEffect(() => {
    http.get('produtos')
      .then(response => setProdutos(response.data))
  }, [])

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {produtos.map(produto => <li key={produto.id}>{produto.nome} - {produto.preco}</li>)}
      </ul>
    </div>
  )
}

export default Produtos