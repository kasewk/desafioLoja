import React from 'react'
import styles from '../styles/Card.module.css'

export default function Card({ name, price, description, photo }) {
    return (
        <div className={styles.marginCard}>
            <div className="card text-dark bg-light" style={{ width: "18rem" }}>
                <img src={photo} className="card-img-top" alt="Foto do produto" width="50px" height="200px" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className={`card-text ${styles.cardDescription}`}>{description}</p>
                    <p className={styles.preco}>{price}</p>
                    <a href="#" className={`btn btn-secondary ${styles.cardButton}`}>Adicionar ao carrinho</a>
                </div>
            </div>

        </div >
    )
}
