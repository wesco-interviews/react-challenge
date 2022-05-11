import React, { useState } from 'react';
import styles from './TourItem.module.css';

function TourItem(props) {
    const { tour, addToCart, deleteFromCart } = props
    const image = require("../../assets/images/" + tour.image);
    const [isAdded, setIsAdded] = useState(false);

    return (
        <section className={styles.tourItem}>
            <img src={image} alt={tour.alttext} />
            {isAdded ? <span className={styles.inCartBadge}>In Cart</span> : null}
            <div className={styles.tourInfo}>
                <h3>{tour.tourname}</h3>
                ${tour.price}
                <p>{tour.description}</p>
            </div>
            {!isAdded ?
                <button onClick={() => {addToCart(tour); setIsAdded(!isAdded)}}>Add To Cart</button> :
                <button className={styles.delete} onClick={() => {deleteFromCart(tour); setIsAdded(!isAdded)}}>Delete From Cart</button>
            }
        </section>
    );
}

export default TourItem;
