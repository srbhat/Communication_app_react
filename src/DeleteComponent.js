
import { useNavigate } from "react-router-dom";
function DeleteComponent() {

    const navigate = useNavigate();
    const deleteredirect = () => {
        navigate("/managedocuments");
    }

    return (
            <div className="delete_window">
                <div className="delete_bar">
                    <div className="exit_box">X</div>
                    <p className="align_centre"><b>Confirm Deletion</b></p>
                </div>
                <div className="image_pos"><img src={require("./img/question.png")} alt=""/></div>
                <div className="file_name"><b>Are you Sure?</b></div>
                <button onClick={deleteredirect} className="ok">Ok</button>
                <button onClick={deleteredirect} className="d_cancel">Cancel</button>
            </div>
    )
}
export default DeleteComponent;