import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../context/users/UserContext";
const Navbar = () => {
  const location = useLocation();
  const userContext = useContext(UserContext);

  const onClickHandle = () => {
    localStorage.removeItem('token');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid gap-3">
        <Link className="navbar-brand" to="/">NoteBook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          {!localStorage.getItem('token') ?
            <div className="nav nav-pills d-flex justify-content-between">
              <li className="nav-item">
                <Link to="/login" className='btn btn-primary mx-2' type="button">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className='btn btn-primary' type="button">Sign up</Link>
              </li>
            </div>
            :
            <div className="d-flex justify-content-between">
              <li className="nav-item">
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-person d-block" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  <div style={{ marginBottom: '5px' }} className="text-white me-5 ms-2">{userContext.userName}</div>
                  {location.pathname}
                </div>
              </li>
              <li className="nav-item">
                <Link to="/login" className='btn btn-primary' role="button" onClick={onClickHandle}>Logout</Link>
              </li>
            </div>
          }
        </div>
      </div>
    </nav >
  )
}

export default Navbar;