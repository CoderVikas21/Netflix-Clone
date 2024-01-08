 import Home from './components/Home'
 import Signin from './components/signin.js'
 import {Routes,Route} from 'react-router-dom'
function App() {

  

  return (
    <>
     
     <Routes>
        <Route path = "/" element ={<Home/>}></Route>
        <Route path = "/signin" element ={<Signin/>}></Route>
     </Routes>
    </>
  );
}

export default App;
