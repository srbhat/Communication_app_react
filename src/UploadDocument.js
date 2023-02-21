import { Navigate } from "react-router-dom";
import React from 'react';
class UploadDocument extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault(); // do not refresh page
        const fileLabel = event.target.elements.fileLabel.value;
        const myFile = event.target.elements.myFile.value;
        const docData = {
            fileId: Number(new Date()),
            fileLabel: fileLabel,
            myFile: myFile
        }
        let docs = localStorage.getItem("uploads") ? JSON.parse(localStorage.getItem("uploads")) : []; // ternary operator
        //Check for existing user 
        // for (let each_user of users) {
        //     if (each_user.email === email) {
        //         alert("User already exists ! Please Login");
        //         return false;
        //     }
        // }
        docs.push(docData);
        localStorage.setItem("uploads", JSON.stringify(docs)); // set item in local storage
        this.props.onUpload();
        this.redirect();
    }

    redirect = () => {
        this.setState({ redirect: true }) // whenever state updates, component rerender
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Navigate to="/managedocuments" />;
        }
        return (
            <div>
                <div className="upload_window">
                    <div className="upload_bar">
                        <div className="exit_box">X</div>
                        <p className="align_centre"><b>Upload</b></p>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="file_name"><b>File Description</b></div>
                        <input name="fileLabel" className="file_text_box" type="text" placeholder="Sample File" />
                        <div className="file_name"><input type="file" name="myFile" /></div>
                        {/* <button className="choose">Choose File</button> */}
                        {/* <div className="file_name"><b>Sample.doc</b></div> */}
                        <button className="save">Upload Now</button>
                        <button className="cancel" onClick={this.redirect} >Cancel</button>
                    </form>
                </div>
            </div>
        )

    }

}
export default UploadDocument;



