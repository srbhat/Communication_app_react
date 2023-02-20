import React from 'react';
import { Navigate } from "react-router-dom";

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault(); // do not refresh page
        const fullName = event.target.elements.fullName.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        const cnfPassword = event.target.elements.cnfPassword.value;
 
        if (!fullName || !email) {
            alert("Add Fields");
            return false;
        }

        if (password !== cnfPassword) {
            alert("Passwords Dont Match!");
            return false;
        }
 
        const user = {
            userId: Number(new Date()),
            fullName: fullName,
            email: email,
            password: password
        }
 
        let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []; // ternary operator
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users)); // set item in local storage
        this.props.onRegUsers();
        this.redirect();
    }
 
    redirect = () => {
        this.setState({ redirect: true }) // whenever state updates, component rerender
    }


    render() {

    const { redirect } = this.state;

    if (redirect) {
        return <Navigate to="/registersuccess" />;
    }

    return (
        <div>
            <h1 className="align_centre">Register</h1>
            <div className="center">
                <form action="registersuccess" onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td className="table_align">
                                    <h3>Full Name</h3>
                                </td>
                                <td><input name="fullName" className="input_box" type="text" placeholder="Anne Hunter"/></td>
                            </tr>
                            <tr>
                                <td className="table_align">
                                    <h3>Email</h3>
                                </td>
                                <td><input name="email" className="input_box" type="email" placeholder="anne.hunter@mail.com" /></td>
                            </tr>
                            <tr>
                                <td className="table_align">
                                    <h3>Password</h3>
                                </td>
                                <td><input name="password" className="input_box input" type="password" placeholder="*****" /></td>
                            </tr>
                            <tr>
                                <td className="table_align">
                                    <h3>Confirm Password</h3>
                                </td>
                                <td><input name="cnfPassword" className="input_box" type="password" placeholder="*****" /></td>
                            </tr>
                            <tr>
                                <td className="button_align" colspan="2">
                                    <button type="Submit" className="submit_box">Register</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}
}

export default Register;

