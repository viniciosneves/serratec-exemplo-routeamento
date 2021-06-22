import axios from "axios"
import { useState } from "react"

const Cadastro = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const efetuarCadastro = (evento) => {
    evento.preventDefault()
    const usuario = {
      nome: nome,
      email: email,
      senha: senha
    }
    axios.post('http://localhost:8000/auth/register', usuario)
      .then(response => console.log(response.data))
      .catch(erro => {
        console.log('Algo deu errado')
        console.log(erro)
      })
    // ??????
    // axios.post('http://localhost:8000/auth/register', USUARIO)
  }

  const manipuladorNome = (evento) => {
    setNome(evento.target.value)
  }

  const manipuladorEmail = (evento) => {
    setEmail(evento.target.value)
  }

  const manipuladorSenha = (evento) => {
    setSenha(evento.target.value)
  }

  return (
    <div>
      <h1>Página de cadastro</h1>
      <form onSubmit={efetuarCadastro}>
        <div>
          <label>Nome</label>
          <input value={nome} onChange={manipuladorNome} required/>
        </div>
        <div>
          <label>E-mail</label>
          <input value={email} onChange={manipuladorEmail} required type="email"/>
        </div>
        <div>
          <label>Senha</label>
          <input value={senha} onChange={manipuladorSenha} required type="password"/>
        </div>
        <button>
          Cadastrar
        </button>
      </form>
    </div>
  )

}

export default Cadastro