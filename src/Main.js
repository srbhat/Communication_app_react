import React from 'react';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import LoginSuccessfull from './LoginSuccessfull';
import RegisterSuccessful from './RegisterSuccessful';
import GroupChat from './GroupChat';
import ManageUsers from './ManageUsers';
// import EditUsers from './EditUsers';
import ManageDocument from './ManageDocument';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class Main extends React.Component { // export class 
    render() { // render lifecycle method
        return (<BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Welcome />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="loginsuccess" element={<LoginSuccessfull />} />
                    <Route path="registersuccess" element={<RegisterSuccessful />} />
                    <Route path="groupchat" element={<GroupChat />} />
                    <Route path="manageusers" element={<ManageUsers />} />
                    <Route path="managedocuments" element={<ManageDocument />} />
                </Route>
            </Routes>
        </BrowserRouter>
        )
    }
}