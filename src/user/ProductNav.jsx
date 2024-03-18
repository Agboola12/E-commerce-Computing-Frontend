import React from 'react'
import { Link } from 'react-router-dom'

const ProductNav = () => {
    return (
        <div>
            <ul className="nav nav-tabs mt-5">
                <li className="nav-item">
                    <Link className="nav-link active" data-bs-toggle="tab" href="#home">All</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" data-bs-toggle="tab" href="#menu1">Phones</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" data-bs-toggle="tab" href="#menu1">EarPods</Link>
                </li>
            </ul>
        </div>
    )
}

export default ProductNav