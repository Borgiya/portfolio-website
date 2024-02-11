
import './App.css';
import Header from './components/Header';
import SkillContainer from './components/SkillContainer';
import TopContainer from './components/TopContainer';
import TopContent from './components/TopContent';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopContainer/>
      <TopContent/>
      <SkillContainer/>
      <Contact/>
    </div>
  );
}

export default App;
