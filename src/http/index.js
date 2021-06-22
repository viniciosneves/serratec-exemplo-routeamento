import axios from 'axios'

// axios.create gera uma INSTANCIA do axios pra mim
const http = axios.create({
  baseURL: 'http://localhost:8000/'
})

http.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    // aqui é nossa mágica

    return config
  },
  (erro) => {
    return Promise.reject(erro)
  }
)

// ANTES DE CADA REQUISIÇÃO, quero ver se tem token
// se tem token, coloca no header

export default http