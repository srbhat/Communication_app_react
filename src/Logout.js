function Logout() {
    return (
    <div>
        <h1 className="align_centre">Welcome to Users Module</h1>
        <h3 className="align_centre">Existing Users</h3>
        <div className="container">
            <a className="link_box" href="login">Login</a>
        </div>
        <h3 className="align_centre">New Users</h3>
        <div className="container">
            <a className="link_box" href="register">Register</a>
        </div>
        <h3 className="align_centre">You have been logged out</h3>
    </div>
    )
}

export default Logout;