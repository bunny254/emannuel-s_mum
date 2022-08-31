import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnotherForm from './siteComponents/anotherForm';
import LandingPage from "./siteComponents/landingPage";
//import MakeContribution from "./siteComponents/makeContribution";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/contribute' element={<AnotherForm/>}/>
      </Routes>  
      </Router>  
    </div>
  );
}

export default App;
