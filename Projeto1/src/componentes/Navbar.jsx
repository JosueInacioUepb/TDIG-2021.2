import React from 'react';
import './styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import AuthProvider, { authContext } from './AuthProvider';
import useAuth from './hooks/useAuth';
import LoginPage from './LoginPage';


const Navbar = () => {
  const { authed, logout } = React.useContext(authContext);
  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div id="menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Home / Cadastros</Link>
          </li>
          <li>
            <Link to="/">|</Link>
          </li>
          <li>
            <Link to="/infoProjetos" >Listagem de Projetos</Link>
          </li>
          <li>
            <Link to="/">|</Link>
          </li>
          <li>
            <Link to="/professor">Área do Professor</Link>
          </li>
          <li>
            <Link to="/">|</Link>
          </li>
          <li>
            <Link to="/aluno">Área do Aluno</Link>
          </li>
          <li>
            <Link to="/">|</Link>
          </li>
        </ul>
        <br></br>

        {authed && <button onClick={handleLogout}>Logout</button>}

      </nav>
    </div>
  );
}

export default Navbar;