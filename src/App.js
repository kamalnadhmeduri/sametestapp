import Header from './components/Header';
import NavBar from './components/NavBar';
import BodyComponent from './components/BodyComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='appContainer'>
        <NavBar/>
        <p>
          import requisitions from RM, find open requisitions, in holds for dates and referrals. 
        </p>
        <BodyComponent/>
      </div>
    </div>
  );
}

export default App;
