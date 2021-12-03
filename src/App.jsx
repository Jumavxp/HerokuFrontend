//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Plantas from './pages/plantas';
import Peces from './pages/peces/peces';
import Acuarios from './pages/Acuarios/Acuarios';
import Productos from './pages/Productos';
import Filtros from './pages/Acuarios/Filtros'
import Limpieza from './pages/Acuarios/Limpieza';
import Login from './pages/Login';
import PrivateLayout from './components/PrivateLayout';
import { Auth0Provider } from '@auth0/auth0-react';


const App = () => {
  return (
    <Auth0Provider 
      domain="amazonia-fish.us.auth0.com" 
      clientId="W9bArqw0DZ0LRv580rCOj67J0yglSxif" 
      // redirectUri={window.location.origin}
      redirectUri="http://localhost:3000/login"
      >
      <div className="App">
        <Router>
            <Switch>
                            
              <Route path={["/plantas"]}>
                <Layout>
                  <Switch>
                    <Route path="/plantas">
                      <Plantas/>
                    </Route>
                  </Switch>
                </Layout>
              </Route>

              <Route path={["/peces"]}>
                <Layout>
                  <Switch>
                    <Route path="/peces">
                      <Peces/>
                    </Route>
                  </Switch>
                </Layout>
              </Route>

              <Route path={["/acuario" , "/acuario/filtros", "/acuario/limpieza"]}>
                <Layout>
                  <Switch>

                    <Route path="/acuario/limpieza">
                      <Limpieza/>
                    </Route>

                    <Route path="/acuario/filtros">
                      <Filtros/>
                    </Route>

                    <Route path="/acuario">
                      <Acuarios/>
                    </Route>
                    

                  </Switch>
                </Layout>
              </Route>

              <Route path={["/productos"]}>
                <Layout>
                  <Switch>
                    <Route path="/productos">
                      <Productos/>
                    </Route>
                  </Switch>
                </Layout>
              </Route>

              <Route path={["/login"]}>
                <PrivateLayout>
                  <Switch>
                    <Route path="/login">
                      <Login/>
                    </Route>
                  </Switch>
                </PrivateLayout>
              </Route>

              <Route path="/:id"> Error 404 Pagina no disponible</Route>

              <Route  path={['/']}>
                <Layout>
                  <Switch>
                    <Route path="/">
                      <Home/>
                    </Route>
                  </Switch>
                </Layout>
              </Route>
            </Switch>
        </Router>
      </div>
    </Auth0Provider>
  );
}

export default App;
