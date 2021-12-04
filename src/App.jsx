//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Plantas from './pages/plantas';
import Peces from './pages/peces/peces';
import Acuarios from './pages/Acuarios/Acuarios';
import Productos from './pages/productos/Productos';
import Filtros from './pages/Acuarios/Filtros'
import Limpieza from './pages/Acuarios/Limpieza';
import Login from './pages/Login';
import PrivateLayout from './components/PrivateLayout';
import CreateProduct from './pages/productos/CreateProduct';
import EditProduct from './pages/productos/EditProduct';
import { Auth0Provider } from '@auth0/auth0-react';


const App = () => {

  return (
    <Auth0Provider 
      domain="amazonia-fish.us.auth0.com" 
      clientId="W9bArqw0DZ0LRv580rCOj67J0yglSxif" 
      // redirectUri={window.location.origin}
      redirectUri="https://fathomless-journey-33778.herokuapp.com/login"
      audience="api-auth-afish"
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

              <Route path={["/products","/products/create-product" , "/products/edit-product/"]}>
                <PrivateLayout>
                  <Switch>

                    <Route path="/products/create-product">
                      <CreateProduct/>
                    </Route>

                    <Route path="/products/edit-product/">
                      <EditProduct />
                    </Route>

                    <Route path="/products">
                      <Productos/>
                    </Route>
                  </Switch>
                </PrivateLayout>
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
