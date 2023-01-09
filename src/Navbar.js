import { Link } from 'react-router-dom';



const Navbar = () =>{
    return (
      <div className="Navbar">
        <div className="Navbar-Option">
            <img src='https://cdn-icons-png.flaticon.com/128/3208/3208679.png' className='nav-img' alt='album-img'/>
            {/* here when home will clicked , then '/' will routes to the home page. */}
           <Link to="/" className='nav-opt'> Home </Link>                         
           <Link to="/addAlbum" className='nav-opt'> Add Album </Link>
        </div>
      </div>
    );
  }
  
  export default Navbar;