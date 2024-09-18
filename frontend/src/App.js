//import logo from './logo.svg';
import './App.css';
import { NavBar } from './component/NavBar';
import { Banner } from './component/Banner';
import { Skills } from './component/Skills';
//import { Project } from './component/Project';
import { Achievement } from './component/Achievement';
import { Extra } from './component/Extra';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
    
      <NavBar/>
      <Banner/>
      <Skills/>
     
      <Achievement/>
      <Extra/>
      <Contact/>
      <Footer/>

    </div>
    
  );
}

export default App;
