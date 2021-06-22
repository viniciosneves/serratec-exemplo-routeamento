import { Link } from 'react-router-dom'
const CardProduto = ({nome, preco, id}) => {
  return (
    <div>
      <h3>{nome}</h3>
      <div>{preco}</div>
      <Link to={`/produto/${id}`}>Ver detalhes</Link>
    </div>
  )
}
export default CardProduto