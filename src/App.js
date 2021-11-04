import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './contex/authProvider';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Service from './components/service/Service';
import Details from './components/details/Details';
import Login from './components/login/Login';
import Notfound from './components/notfound/Notfound';
import Footer from './components/footer/Footer';
import AddService from './components/AddService/AddService';
import ManageAllData from './components/ManageAllData/ManageAllData';
import MyOrders from './components/MyOrders/MyOrders';
import Registation from './components/registation/Registation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/service'>
              <Service></Service>
            </PrivateRoute>
            <PrivateRoute path='/addService'>
              <AddService></AddService>
              </PrivateRoute>
              <PrivateRoute exact path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
             <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageData">
              <ManageAllData></ManageAllData>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/registation'>
             <Registation></Registation>
            </Route>
            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
