import { Outlet, Link } from "react-router-dom";
const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Welcome</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/loginsuccess">Login Successful</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/registersuccess">Register Successful</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/groupchat">Chat</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ManageUsers">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/managedocuments">Documents</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav;

