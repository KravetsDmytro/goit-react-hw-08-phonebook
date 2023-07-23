
// import { useDispatch } from 'react-redux';
// import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
const App = () => {
// const dispapch=useDispatch();


  return (

<Routes>
<Route path='/' element={<Layout />}>
<Route index element={<Home />}/>
<Route path='/register'
 element={<RestrictedRoute redirectTo='/contact' component={<Register/>}/>}/>
<Route path='/login'
 element={<RestrictedRoute redirectTo='/contact' component={<Login/>}/>}/>
<Route path='/contacts' element={<PrivateRoute  redirectTo='/login'  component={<Contacts/>}/>}/>
 </Route>
 </Routes>




  );
};

export default App;
