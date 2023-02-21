import React from 'react';
import { Navigate } from "react-router-dom";
export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault(); // do not refresh page
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;

        if (!password || !email) {
            alert("Add Fields");
            return false;
        }

        let apos = email.indexOf("@"); // from beginning first item
        let dotpos = email.lastIndexOf("."); // from beginning last item
        if (apos < 1 || (dotpos - apos) < 2) {
            alert("Email Should Have @ and a . after the @");
            return false;
        }

        if (password.length < 8) {
            alert("Password length Should be Greater than 8 characters!");
            return false;
        }

        const loggedinuser = {
            email: email,
            password: password
        }

        // Validate user login
        let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []; // ternary operator
        let user_found = "no";
        for (let each_user of users) {
            if (each_user.email === email) {
                user_found = "yes";
                if (each_user.password === password) {
                    let loggeduser = [] // Always Empty
                    loggeduser.push(loggedinuser);
                    localStorage.setItem("loggedin", JSON.stringify(loggeduser));
                    this.props.onLogin();
                    this.redirect();
                }
                else {
                    alert("Password doesnt match!");
                    return false;
                }
            }

        }

        if (user_found === "no") {
            alert("User Was not found!");
            return false;
        }
    }

    redirect = () => {
        this.setState({ redirect: true }) // whenever state updates, component rerender
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Navigate to="/loginsuccess" />;
        }
        return (
            <div>
                <h1 className="align_centre">Login</h1>
                <div className="center">
                    <form onSubmit={this.handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="table_align">
                                        <h3>Email</h3>
                                    </td>
                                    <td><input className="input_box" type="email" name="email" placeholder="anne.hunter@mail.com"></input></td>
                                </tr>
                                <tr>
                                    <td className="table_align">
                                        <h3>Password</h3>
                                    </td>
                                    <td><input className="input_box input" type="password" name="password" placeholder="*****"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="button_align" colSpan="2">
                                        <button type="Submit" className="submit_box">Login</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div >
        )
    }

}
