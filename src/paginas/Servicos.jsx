import http from '../http'
import { useEffect, useState } from "react"

const Servicos = () => {

  const [servicos, setServicos] = useState([])

  useEffect(() => {
    http.get('servicos')
      .then(response => setServicos(response.data))
  }, [])

  return (
    <div>
      <h1>Serviços</h1>
      <ul>
        {servicos.map(servico => <li key={servico.id}>{servico.nome} - {servico.preco}</li>)}
      </ul>
    </div>
  )
}

export default Servicos