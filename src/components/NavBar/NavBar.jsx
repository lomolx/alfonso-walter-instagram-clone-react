import "./NavBar.css";
import NavItemDB from "../NavItem/NavItemDB.json"
import NavItem from "../NavItem/NavItem";


function NavBar({}){

    const ToggleIcon = "https://png.pngtree.com/png-clipart/20190116/ourlarge/pngtree-yellow-car-beautiful-car-hand-drawn-car-cartoon-car-png-image_402800.jpg"
    return(
        <nav className="NavBar">
            <div className="NavBar-Logo">
                <img src="./src/assets/icons/instagram.png" alt="Logotipo de instagram" />
            </div>
            <menu className="NavBar-Items">
            {NavItemDB.map((item)=><li><NavItem icon={item.icon} alter={item.alter} action={item.action}  /></li>)}{/*map to generate navegation buttons */} 
            </menu>
            <menu className="NavBar-ToggleMenu">
                <NavItem icon="../src/assets/icons/menu.png" alter={"Boton de más"} action={"Más"}/>
            </menu>
        </nav>
    )
}


export default NavBar;