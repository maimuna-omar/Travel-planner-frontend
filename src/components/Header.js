// import React from 'react';
// import './Header.css';


// const Header = ({ isLoggedIn, onLogout }) => {
//     return (
//         <header>
//             <h1>MAYAS TRAVEL PLANNER</h1>
//             {isLoggedIn ? (
//                 <button onClick={onLogout}>Logout</button>
//             ) : (
//                 <p>TRAVEL AWAY ✈️ </p>
//             )}
//         </header>
//     );
// };

// export default Header;

import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header>
      <div className="header-items">
        <h1 className="title">MAYAS TRAVEL PLANNER</h1>
      </div>
      <nav>
        {isLoggedIn ? (
          <button className="logout-btn" onClick={onLogout}>LOG OUT</button>
        ) : (
          <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
