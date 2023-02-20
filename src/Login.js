import React from 'react';
export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {
                email: "",
                password: ""
            }
        }
    }

    submitHandler = event => {
        event.preventDefault(); // do not refresh page
    }

    changeHandler = event => {
        let errors = this.state.errors;
        let name = event.target.name;
        let value = event.target.value;

        switch (name) {
            case "email":
                errors.email = value.length < 5 ? "Email must be 5 characters length" : ""
                let apos = value.indexOf("@"); // from beginning first item
                let dotpos = value.lastIndexOf("."); // from beginning last item
                if (apos < 1 || (dotpos - apos) < 2) {
                    errors.email = "Please enter valid email Id";
                }
                break;
            case "password":
                errors.password = value.length < 8 ? "Password must be 5 characters length" : ""
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value });
    }

    render() {
        const { errors } = this.state; // added in ES6
        return (
            <div>
                <h1 className="align_centre">Login</h1>
                <div className="center">
                    <form action="./login-success.html" onsubmit={this.submitHandler}>
                        <table>
                            <tr>
                                <td className="table_align">
                                    <h3>Email</h3>
                                </td>
                                <td><input className="input_box" type="email" name="email" placeholder="anne.hunter@mail.com" onChange={this.changeHandler}></input></td>
                                <p className="error">{errors.email}</p>
                            </tr>
                            <tr>
                                <td className="table_align">
                                    <h3>Password</h3>
                                </td>
                                <td><input className="input_box input" type="password" name="password" placeholder="*****" onChange={this.changeHandler}></input>
                                </td>
                                <p className="error">{errors.password}</p>
                            </tr>
                            <tr>
                                <td className="button_align" colspan="2">
                                    <button type="Submit" className="submit_box">Login</button>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div >
        )
    }

}
