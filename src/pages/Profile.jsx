import "./Profile.css"
import Galeria from "../components/Galeria/Galeria";
import ProfileInfo from "../components/ProfileInfo/PorfileInfo";

function Profile(){
    return(
        <div className="Profile">
            <main className="Principal">
                <ProfileInfo/>
                <Galeria/>
            </main>
        </div>
    )
}

export default Profile;