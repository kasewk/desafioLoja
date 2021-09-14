import React from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav class={`navbar navbar-expand-lg navbar-dark bg-secondary`}>
            <div class={`container-fluid ${styles.navMargin}`}>
                <a class="navbar-brand" href="#">Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class={`collapse navbar-collapse`} id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Loja</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Cadastrar Produto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
