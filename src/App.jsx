//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Plantas from './pages/plantas';
import Peces from './pages/peces';
import Acuarios from './pages/Acuarios';
import Productos from './pages/Productos';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>          
            <Route exact path='/'>         
              <Home/>
            </Route> 
            <Route path="/plantas">
              <Plantas/>
            </Route>
            <Route path="/peces">
              <Peces/>
            </Route>
            <Route path="/acuarios">
              <Acuarios/>
            </Route>
            <Route path="/productos">
              <Productos></Productos>
            </Route>
            <Route path="/:id"> Error 404 Pagina no disponible</Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
