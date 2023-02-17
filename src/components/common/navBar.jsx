import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="mb-3 navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">MyBooks</Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to="/books" className="nav-link">Книги</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacts" className="nav-link">Контакты</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">О проекте</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;