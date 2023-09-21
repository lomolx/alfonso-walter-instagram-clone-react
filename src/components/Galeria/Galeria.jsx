import "./Galeria.css"
import { useState } from "react"

function Galeria(){

    const fotos = [
        /*{
            foto: "../src/assets/images/imagen_1.jpeg"
        },
        {
            foto: "../src/assets/images/imagen_1.jpeg"
        },
        {
            foto: "../src/assets/images/imagen_1.jpeg"
        },
        {
            foto: "../src/assets/images/imagen_1.jpeg"
        },
        {
            foto: "../src/assets/images/imagen_1.jpeg"
        },
        {
            foto: "../src/assets/images/imagen_1.jpeg"
        }*/
        {
            foto: "https://i.ytimg.com/vi/Oso6dYXw5lc/hqdefault.jpg"
        },
        {
            foto: "https://i.ytimg.com/vi/Oso6dYXw5lc/hqdefault.jpg"
        },
        {
            foto: "https://i.ytimg.com/vi/Oso6dYXw5lc/hqdefault.jpg"
        },
        {
            foto: "https://i.ytimg.com/vi/Oso6dYXw5lc/hqdefault.jpg"
        },
        {
            foto: "https://i.ytimg.com/vi/Oso6dYXw5lc/hqdefault.jpg"
        },
        {
            foto: "https://i.ytimg.com/vi/Oso6dYXw5lc/hqdefault.jpg"
        }
    ]


    return(
        <>
       <div className="galeria"> 
             {fotos.map((fotito)=><img src={fotito.foto}/>)}
        </div>
        </>
        )
}

export default Galeria;