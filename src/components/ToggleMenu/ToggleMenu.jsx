import "./ToggleMenu.css"

function ToggleMenu({icon, alter, action}){
    return(
        <li>
            <img src={icon} alt={alter} />
            <span>{action}</span>
        </li>
    )
}

export default ToggleMenu;