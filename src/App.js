import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Cabecalho from './componetes/Cabecalho';
import Home from './componetes/Home';
import Servicos from './componetes/Servicos';
import Portfolio from './componetes/Portfolio';
import Preco from './componetes/Preco';
import Rodape from './componetes/Rodape';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho></Cabecalho>
          
          <Route path='/' exact component={Home}></Route>
          <Route path='/servicos' component={Servicos}></Route>
          <Route path='/portfolio' component={Portfolio}></Route>
          <Route path='/preco' component={Preco}></Route>

          <Rodape></Rodape>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
