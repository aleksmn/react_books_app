import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="mb-5 navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" href="#">Navbar</NavLink>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link active" href="#">Home
                                <span className="visually-hidden">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#">Features</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#">Pricing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#">About</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</NavLink>
                            <div className="dropdown-menu">
                                <NavLink className="dropdown-item" href="#">Action</NavLink>
                                <NavLink className="dropdown-item" href="#">Another action</NavLink>
                                <NavLink className="dropdown-item" href="#">Something else here</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" href="#">Separated link</NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;