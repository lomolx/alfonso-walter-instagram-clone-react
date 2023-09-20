import "./NavItem.css"
import "./NavItemDB.json"


function NavItem({icon, alter, action}){
    return(
        <div className="navItem">
            <img className="navItem-Icon" src={icon} alt={alter} />
            <span className="navItem-Action" >{action}</span>
        </div>
    )
}

export default NavItem;