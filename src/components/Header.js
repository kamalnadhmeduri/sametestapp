import logo from '../images/SempraEnergy_logo.png';
import settingsIcon from '../images/icons8-settings.svg'
import './Header.css';

function Header() {
  return (
    <div className="AppHeader">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          POS (Position Opertunity System)
        </a>
      </header>
        <div className='subHeader'>
            <div className='subNavContent'>
                <span className='adminSettings'>Admin Settings
                </span>
                <img src={settingsIcon} className="settingIcon" alt="settings" />
            </div>
        </div>
    </div>
  );
}

export default Header;
