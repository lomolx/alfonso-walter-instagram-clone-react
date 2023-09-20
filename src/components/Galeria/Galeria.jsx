import "./Galeria.css"
import { useState } from "react"

function galeriaItem({image}){
    const [selected, setSelected]= useState(false)

    function handleClick(){
        setSelected(!selected)
    }

    return <galeria className="galeria"> 
             <article
                    onClick={handleClick}
                    style={{backgroundColor: selected? color : ''}} 
                    className="galeria-item">
                <img src={image} alt="" />
                </article>
            </galeria>
}





export default Galeria;