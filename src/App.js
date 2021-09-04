import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Library from './pages/Library'
import List from './pages/List'
import Game from './pages/Game'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap'
import AppState from './context/AppState'

function App() {
  return (
    <AppState>
      <BrowserRouter>
        <Header />
        <Container>
          <Switch>
            <Route path='/' component={Home} exact={true}/>
            <Route path='/library/:listname' component={List} />
            <Route path='/library' component={Library} exact={true}/>
            <Route path='/game/:listname' component={Game} />
          </Switch>
        </Container>
      </BrowserRouter>
    </AppState>
  );
}

export default App;
