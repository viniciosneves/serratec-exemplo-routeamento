import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './paginas/Home'
import Produtos from './paginas/Produtos'
import Produto from './paginas/Produto'
import Servicos from './paginas/Servicos'
import Pagina404 from './paginas/Pagina404'
import Cadastro from './paginas/Cadastro'
import Login from './paginas/Login'
import Navbar from './componentes/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/produtos">
          <Produtos />
        </Route>

        <Route path="/produtos/:id">
          <Produto />
        </Route>
        
        <Route path="/servicos">
          <Servicos />
        </Route>

        <Route path="/cadastro">
          <Cadastro />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
