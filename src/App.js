import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header'
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Resume from './components/resume/Resume'
import Works from './components/works/Works'
function App() {
  return (
    <div className="App">
       
       <Header></Header>
       <Portfolio/>
       <About/>
       <Resume/>
       <Works/>
    </div>
  );
}

export default App;
