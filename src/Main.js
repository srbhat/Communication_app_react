import React from 'react';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import LoginSuccessfull from './LoginSuccessfull';
import RegisterSuccessful from './RegisterSuccessful';
import GroupChat from './GroupChat';
import ManageUsers from './ManageUsers';
import EditUsers from './EditUsers';
import ManageDocument from './ManageDocument';
import Logout from './Logout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default class Main extends React.Component { // export class 


    constructor(props) {
        super(props);
        this.state = { // object
            users: getDataFromLocalStorage()
        }
    }

    userRegister = () => { // new product
        this.setState({ // whenever state update, component rerender
            users: getDataFromLocalStorage()
        })
    }


    render() { // render lifecycle method
        return (<BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register onRegUsers={() => this.userRegister()} />} />
                <Route path="loginsuccess" element={<LoginSuccessfull />} />
                <Route path="registersuccess" element={<RegisterSuccessful />} />
                <Route path="groupchat" element={<GroupChat />} />
                <Route path="manageusers" element={<ManageUsers users={this.state.users} />} />
                <Route path="managedocuments" element={<ManageDocument />} />
                <Route path="edituser" element={<EditUsers />} />
                <Route path="logout" element={<Logout />} />
            </Routes>
        </BrowserRouter>
        )
    }
}

function getDataFromLocalStorage() {
    let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []; // ternary operator
    return users;
}