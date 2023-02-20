function EditUsers() {
    return (
        <div>
            <span className="tab"><a className="tool_box" href="groupchat">Group Chat</a></span>
            <span className="tab"><a className="tool_box" style={{ backgroundColor: "white" }} href="manageusers">Manage Users</a></span>
            <span className="tab"><a className="tool_box" href="managedocuments">Manage Documents</a></span>
            <span className="tab"><a className="tool_box" href="logout">Logout</a></span>
            <h1 class="align_centre">Edit User Information</h1>
            <div class="center">
                <form action="/manageusers">
                    <table>
                        <tbody>
                            <tr>
                                <td class="table_align">
                                    <h3>Full Name</h3>
                                </td>
                                <td><input class="input_box input" type="Text" placeholder="Anne Hunter" /></td>
                            </tr>
                            <tr>
                                <td class="table_align">
                                    <h3>Email</h3>
                                </td>
                                <td><input class="input_box" type="email" placeholder="anne.hunter@mail.com" /></td>
                            </tr>

                            <tr>
                                <td class="button_align" colspan="2">
                                    <button type="Submit" class="submit_box">Save</button>
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