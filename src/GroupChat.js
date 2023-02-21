function GroupChat() {
    return (
        <div>
            <span className="tab"><a className="tool_box" style={{ backgroundColor: "white" }} href="groupchat">Group Chat</a></span>
            <span className="tab"><a className="tool_box" href="manageusers">Manage Users</a></span>
            <span className="tab"><a className="tool_box" href="managedocuments">Manage Documents</a></span>
            <span className="tab"><a className="tool_box" href="logout">Logout</a></span>
            <div className="chat_bar">
                <div className="exit_box">X</div>
                <p className="align_centre">Group Chat</p>
            </div>

            <div className="chats">
                [2013-27-01 01:00:16] Text User: Lorem ipsum dolor sit amet, <br />
                [2013-27-01 01:05:22] Text User: consectetur adipisicing elit. <br />
                [2013-27-01 01:11:14] Anne Hunter: In aliquid temporibus ea? Laudantium voluptate. <br />
                [2013-27-01 02:11:35] Jack Washk: quo officia laboriosam ab voluptatibus asperiores <br />
            </div>

            <div className="chat_window">
                <div className="chat_name"><b>Anne Hunter</b></div>
                <input name="fileLabel" className="chat_text_box" type="text" placeholder="" />
                <button className="send">Send</button>
                <button className="refresh">Refresh</button>
            </div>
        </div>
    )
} export default GroupChat;