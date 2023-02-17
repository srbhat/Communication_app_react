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

export default class Main extends React.Component { // export class 
    render() { // render lifecycle method
        return <div>
            <div>This is Main Class Component</div>
            <Welcome />
            <Login />
            <Register />
            <LoginSuccessfull />
            <RegisterSuccessful />
            <GroupChat />
            <ManageUsers />
            <EditUsers />
            <ManageDocument />
        </div>
    }
}