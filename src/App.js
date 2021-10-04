
import { BrowserRouter as Router , Switch,Route} from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import NavBar from './component/Header/NavBar';
import Slider from './component/Header/Slider';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Service from './component/Service/Service';
import Success from './component/sucsses/Success';


function App() {
  return (
    
   <Router>
   
      <NavBar></NavBar>
      {/* <Slider></Slider> */}
    
   <Switch>

 
   <Route path='/About'>
<About></About>
</Route>
  {/* <Route path='/'>
<Home></Home>
  </Route> */}
  <Route path='/home'>
  <Slider></Slider>
<Home></Home>

  </Route>
<Route path='/service'>
  <Service></Service>
</Route>
<Route path='/success'>
  <Success></Success>
</Route>
<Route path='*'>
  <NotFound></NotFound>

</Route>
     
      </Switch>
      <Footer></Footer>
   </Router>
  );
}

export default App;
