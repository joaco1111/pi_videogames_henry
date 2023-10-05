import React from 'react'
import i from ''
import s from '../Error/Error.module.css'

export default function Error () {

    return (
        <div className={s.kirby}>
            <h1>No se encontraron videojuegos</h1>
            <img src={i} alt='kirby' />
        </div>
    )
}