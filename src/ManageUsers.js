function ManageUsers(props) {
    return (
        <div>
            <span className="tab"><a className="tool_box" href="groupchat">Group Chat</a></span>
            <span className="tab"><a className="tool_box" style={{ backgroundColor: "white" }} href="./user-list.html">Manage Users</a></span>
            <span className="tab"><a className="tool_box" href="managedocuments">Manage Documents</a></span>
            <span className="tab"><a className="tool_box" href="logout">Logout</a></span>
            <h1>Users</h1>
            <table className="usertable">
                <thead className="userthead">
                    <tr className="usertr">
                        <td>
                            Name
                        </td>
                        <td className="align_centre">
                            User Email ID
                        </td>
                        <td>

                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.map((user, index) => (
                            <tr className="usertr" key={index}>
                                <td>{user.fullName}</td>
                                <td className="align_centre">{user.email}</td>
                                <td className="align_centre">
                                    <button className="ed_buttons" onclick="document.location='edit-user.html'"> Edit </button> | <button
                                        className="ed_buttons" onclick="showDelete()"> Delete </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default ManageUsers;