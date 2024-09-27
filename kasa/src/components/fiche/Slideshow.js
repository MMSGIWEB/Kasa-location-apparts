import React, { useState } from "react";
import appts from "../../datas/logements.json"
import { useParams } from "react-router-dom";

function Slideshow() {
    //on extrait la v 'id' pour récup de l'id de la fiche concernée
    const { id } = useParams()
    //fait correspondre l'id à celui du logement
    const logement = appts.find((appt) => appt.id === id)
    //valeur d'état + fonction pour mettre à jour l'état de l'img que le slider affichera
    const [currentPicture, setCurrentPicture] = useState(0)

    //fonction qui donne une classe à l'image actuelle
    const getClassName = (i) => {
        if (i === currentPicture) {
            return "currentImg";
            return ""
        }
    }

    //récup des images pour chaque fiche logement
    //opérateur de sécu optionnel vérifie si 'logement' existe bien avant d'acceder à la pp
    const pictures = logement?.pictures.map((picture, i) => {
        return (
            <img key={i} src={picture} alt="image du logement" className={getClassName(i)} />
        )
    })

    const moveToNext = () => {
        //currentState va changer de 1 à 1, sans dépasser la longueur du nb d'img
        //'%..' limite la longueur de l'arrêt
        setCurrentPicture((currentPicture + 1) % pictures.length)
    }

    const moveToPrevious = () => {
        //notre constante équivaut l'img actuelle - 1 lorsqu'on on arrive à la fin du nb d'imgs
        const afterPictureLength = currentPicture - 1
        //mais si c'est inférieur à 0 on applique 
        if (afterPictureLength < 0) {
            //application du changement d'img avec le code en ()
            setCurrentPicture(pictures.length - 1)
            return
        }
        //sinon le code habituel pour le changement d'img
        setCurrentPicture((currentPicture - 1) % pictures.length)

    }


    return (
        <>
            <div className="infoBanner">
                {pictures}
                {/* conditions : si le nombre d'img est supérieur à 1 alors on intègre les flèches */}
                <button className="arrowLeft arrow">
                    {pictures.length > 1 && (
                        <i className="fa-solid fa-chevron-left" onClick={moveToPrevious}></i>
                    )}
                </button>
                <button className="arrowRight arrow">
                    {pictures.length > 1 && (
                        <i className="fa-solid fa-chevron-right" onClick={moveToNext}></i>
                    )}
                </button>
            </div>

        </>
    )
}

export default Slideshow