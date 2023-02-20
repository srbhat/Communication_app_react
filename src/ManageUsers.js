import React from 'react'; // core module
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Navigate } from "react-router-dom";


class ManageUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            show: false
        }
    }

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true }); // true means show
    save = () => {
        alert(1); // write logic for save here
        this.setState({ show: false });
    }

    editredirect = () => {
        this.redirect();
    }

    redirect = () => {
        this.setState({ redirect: true }) // whenever state updates, component rerender
    }


    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Navigate to="/edituser" />;
        }
        return (
            <div>
                <span className="tab"><a className="tool_box" href="groupchat">Group Chat</a></span>
                <span className="tab"><a className="tool_box" style={{ backgroundColor: "white" }} href="manageusers">Manage Users</a></span>
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
                            this.props.users.map((user, index) => (
                                <tr className="usertr" key={index}>
                                    <td>{user.fullName}</td>
                                    <td className="align_centre">{user.email}</td>
                                    <td className="align_centre">
                                        <button className="ed_buttons" onClick={this.editredirect}> Edit </button> | <button
                                            className="ed_buttons" onClick={this.handleShow}> Delete </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm User Deletion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you Sure?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                No
                            </Button>
                            <Button variant="primary" onClick={this.save}>
                                Yes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div >
        )
    }
}


export default ManageUsers;