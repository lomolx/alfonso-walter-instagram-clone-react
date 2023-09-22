import "./Galeria.css"
import { useState } from "react"
import GaleryItem from "../GaleryItem/GaleryItem"


function Galeria(){

    const galeryBar = [
        {
          image:"../src/assets/icons/icono_grid.png",
          alter:"Boton de publicaciones",
          action:"PUBLICACIONES "
        },
        {
            image:"../src/assets/icons/Bookmark.svg ",
            alter:"Boton de Guardadas ",
            action:"GUARDADAS "
        },
        {
          image:"../src/assets/icons/icono_etiqueta.svg ",
          alter:"Boton de Etiquetadas ",
          action:"ETIQUETADAS"
      }
    ]

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
        <div className='GaleryBar'>
            {galeryBar.map((item)=><GaleryItem image={item.image} alter={item.alter} action={item.action} />)}
        </div>
        <div className="galeria"> 
             {fotos.map((fotito)=><img src={fotito.foto}/>)}
        </div>
        </>
        )
}

export default Galeria;