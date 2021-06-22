import axios from "axios"
import { useState } from "react"

const Login = () => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const efetuarLogin = (evento) => {
    evento.preventDefault()
    const usuario = {
      email: email,
      senha: senha
    }
    axios.post('http://localhost:8000/auth/login', usuario)
      .then(response => {
        console.log(response.data)
        localStorage.setItem('token', response.data.access_token)
        localStorage.setItem('nome', response.data.user.nome)
      })
      .catch(erro => {
        console.log('Algo deu errado')
        console.log(erro)
      })
  }

  const manipuladorEmail = (evento) => {
    setEmail(evento.target.value)
  }

  const manipuladorSenha = (evento) => {
    setSenha(evento.target.value)
  }

  return (
    <div>
      <h1>Página de login</h1>
      <form onSubmit={efetuarLogin}>
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

export default Login