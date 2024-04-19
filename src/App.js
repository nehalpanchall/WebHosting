import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './comps/header';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Plans from './pages/plans';
import Domain from './pages/domain';
import Contact from './pages/contact';

function App() {
  return (
    <div>
<Router>
<Header/>
<Routes>

<Route exact path='/' element={<Home/>}/>

<Route exact path='/about' element={<About/>}/>

<Route exact path='/services' element={<Services/>}/>

<Route exact path='/plans' element={<Plans/>}/>

<Route exact path='/domain' element={<Domain/>}/>

<Route exact path='/contact' element={<Contact/>}/>

</Routes>

</Router>
</div>
);
}
export default App;
