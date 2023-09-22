
import ProfileNumber from "../PorfileNumber/ProfileNumber.jsx";
import "./ProfileInfo.css"
import userData from "./PorfileInfo.json"

// COMPONENT FROM PORFILE INFORMATION

function ProfileInfo(){

    const randon = ()=>{Math.random() * (999 - 120) + 120;}

    return(
        <div className="ProfileInfo">
            <section className="ProfileInfo-Picture">
                <img src={userData.picture} alt={userData.alter} />
            </section>
            <section className="ProfileInfo-Data">
                <ul className="ProfileInfo-Data-Confg">
                    <li><span>{userData.id}</span></li>
                    <li><span>Editar perfil</span></li>
                    <li><img src="../src/assets/icons/Settings.svg" alt="Boton de ajustes" /></li>
                </ul>
                <ul className="ProfileInfo-Data-Numbers">
                    <ProfileNumber number="5 " action="Publicaciones"/>
                    <ProfileNumber number={randon} action="Seguidores"/>
                    <ProfileNumber number={randon} action="Seguidos"/>
                </ul>
                <span>{userData.userName}</span>
                <p>{userData.descr}</p>
            </section>
        </div>
    )
}

export default ProfileInfo;