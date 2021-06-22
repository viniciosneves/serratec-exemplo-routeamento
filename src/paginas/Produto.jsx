import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const Produto = () => {
  const { id } = useParams()
  const [produto, setProduto] = useState({})
  useEffect(() => {
    axios.get('http://localhost:8000/produtos/'+id)
      .then(response => setProduto(response.data))
  }, [id])
  return (
    <div>
      <h1>{produto.nome}</h1>
      <h1>{produto.preco}</h1>
    </div>
  )
}
export default Produto
