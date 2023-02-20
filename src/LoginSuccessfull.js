function LoginSuccessfull() {
    return (
        <div>

            <span className="tab"><a className="tool_box" href="groupchat">Group Chat</a></span>
            <span className="tab"><a className="tool_box" style={{ backgroundColor: "white" }} href="manageusers">Manage Users</a></span>
            <span className="tab"><a className="tool_box" href="managedocuments">Manage Documents</a></span>
            <span className="tab"><a className="tool_box" href="logout">Logout</a></span>

            <h1 className="align_centre">Login Successful</h1>
            <p className="align_centre"><b>Welcome!</b> <span id="welcome"></span> </p>
        
        </div>
    )
}

export default LoginSuccessfull;