import "./ProfileNumber.css";

// COMPONENT FROM NUMBER OF PHOTOS, FOLLOW AND FOLLOWERS

function ProfileNumber({number, action}){
    return(
        <li>
            <span>{number}{action}</span>
        </li>
    )
}

export default ProfileNumber;