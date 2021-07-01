
import './NavBar.css';

function NavBar() {
  return (
    <div className="navBar">
      <button className='navBarButton'>Requisitions</button>
      <button className='navBarButton'>Employees</button>
      <button className='navBarButton'>Requirment groups</button>
      <button className='navBarButton'>Requirments</button>
      <button className='navBarButton'>Waivers</button>
      <button className='navBarButton'>Layoffs</button>
      <button className='navBarButton'>Links</button>
    </div>
  );
}

export default NavBar;
