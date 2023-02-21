import { useNavigate } from "react-router-dom";
function EditDocuments() {

    const navigate = useNavigate();
    const editredirect = () => {
        navigate("/managedocuments");
    }

    return (
        <div>
            <span className="tab"><a className="tool_box" href="groupchat">Group Chat</a></span>
            <span className="tab"><a className="tool_box" style={{ backgroundColor: "white" }} href="manageusers">Manage Users</a></span>
            <span className="tab"><a className="tool_box" href="managedocuments">Manage Documents</a></span>
            <span className="tab"><a className="tool_box" href="logout">Logout</a></span>
            <h1 className="align_centre">Edit Documents Information</h1>

            <div class="edit_window">
                <div class="edit_bar">
                    <div class="exit_box">X</div>
                    <p class="align_centre"><b>Edit</b></p>
                </div>
                <input name="fileLabel" className="file_text_box" type="text" placeholder="Sample File" />
                <button onClick={editredirect} class="save">Save</button>
                <button onClick={editredirect} class="cancel">Cancel</button>
            </div>
        </div>
    )
}

export default EditDocuments;