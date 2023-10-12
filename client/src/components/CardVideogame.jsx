import React from "react";
import s from '../style/CardVidegames.module.css';
import { NavLink } from "react-router-dom";
import data from '../data';

class CardVideogame extends React.Component {
    render() {
        // Aquí puedes acceder a los datos desde data.js
        // Por ejemplo, si deseas mostrar el primer elemento del arreglo de datos:
        const firstGameData = data[0];

        return (
            <div className={s.card}>
                <img src={firstGameData.image_background} width="400px" height="250px" alt=""/>
                <div className={s.card__content}>
                    <h3 className={s.nombre}>{firstGameData.name}</h3>
                    <p className={s.genres}>{firstGameData.genres}</p>
                    <p className={s.rating}>⭐ {firstGameData.rating}</p>
                    <NavLink to={`/detail/${firstGameData.id}`} className={s.navLink}>
                        <span className={s.leer_mas}>Leer más</span>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default CardVideogame;
