function EditUsers() {
    return (
        <div>
            <span className="tab"><a className="tool_box" href="groupchat">Group Chat</a></span>
            <span className="tab"><a className="tool_box" style={{ backgroundColor: "white" }} href="manageusers">Manage Users</a></span>
            <span className="tab"><a className="tool_box" href="managedocuments">Manage Documents</a></span>
            <span className="tab"><a className="tool_box" href="logout">Logout</a></span>
            <h1 className="align_centre">Edit User Information</h1>
            <div className="center">
                <form action="/manageusers">
                    <table>
                        <tbody>
                            <tr>
                                <td className="table_align">
                                    <h3>Full Name</h3>
                                </td>
                                <td><input className="input_box input" type="Text" placeholder="Anne Hunter" /></td>
                            </tr>
                            <tr>
                                <td className="table_align">
                                    <h3>Email</h3>
                                </td>
                                <td><input className="input_box" type="email" placeholder="anne.hunter@mail.com" /></td>
                            </tr>

                            <tr>
                                <td className="button_align" colspan="2">
                                    <button type="Submit" className="submit_box">Save</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default EditUsers;