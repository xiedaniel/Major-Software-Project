import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Library from './pages/List'
import Create from './pages/Create'
import Game from './pages/Game'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact={true}/>
        <Route path='/library' component={Library} />
        <Route path='/create' component={Create} />
        <Route path='/game' component={Game} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
