import { useNavigate } from "react-router-dom";
function ManageDocument(props) {

    const navigate = useNavigate();

    const redirect = () => {
        navigate("/uploaddoc");
    }

    const editredirect = () => {
        navigate("/editdoc");
    }

    const deleteredirect = () => {
        navigate("/deletedoc");
    }
    return (
        <div>
            <span className="tab"><a className="tool_box" href="groupchat">Group Chat</a></span>
            <span className="tab"><a className="tool_box" href="manageusers">Manage Users</a></span>
            <span className="tab"><a className="tool_box" style={{ backgroundColor: "white" }} href="managedocuments">Manage Documents</a></span>
            <span className="tab"><a className="tool_box" href="logout">Logout</a></span>

            <h1>My Uploads</h1>
            <table className="usertable">
                <thead className="userthead">
                    <tr className="usertr">
                        <td>
                            Label
                        </td>
                        <td className="align_centre">
                            File Name
                        </td>
                        <td className="align_centre">
                            Action
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.docs.map((doc, index) => (
                            <tr className="usertr" key={index}>
                                <td>{doc.fileLabel}</td>
                                <td className="align_centre">{doc.myFile}</td>
                                <td className="align_centre">
                                    <button className="ed_buttons" onClick={editredirect}> Edit </button> | <button
                                        className="ed_buttons" onClick={deleteredirect}> Delete </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <h1>Shared Uploads</h1>
            <table className="usertable">
                <thead className="userthead">
                    <tr className="usertr">
                        <td>
                            Label
                        </td>
                        <td className="align_centre">
                            File Name
                        </td>
                        <td className="align_centre">
                            Shared by
                        </td>
                    </tr>
                </thead>

                <tr>
                    <td>
                        <button className="submit_box" onClick={redirect}>+ Add Upload</button>
                    </td>
                    <td>

                    </td>
                    <td>

                    </td>
                </tr>
            </table >
        </div >

    )
}

export default ManageDocument;