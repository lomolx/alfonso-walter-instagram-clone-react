import "./GaleryItem.css"

function GaleryItem ({image, alter,action}){

    
    return(
        <>
        <li className="GaleryItem">
            <img src={image} alt={alter}/>
            <span>{action}</span>
        </li>
        </>
    )

    
}

export default GaleryItem