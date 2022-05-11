import React from 'react';
import TourItem from './TourItem.js';
import tourData from '../../assets/tourdata.json';
import { MenuItem, Select } from '@mui/material';
import styles from './Tours.module.css';
import { ShoppingCartRounded } from '@mui/icons-material';
import { useCart } from './useCart.js';

function Tours() {

    const {
        cartTotal,
        addToCart,
        deleteFromCart
    } = useCart();

    const handleChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <>
            <h2>Tours</h2>
            <div className={styles.tourHeader}>
                <div className={styles.filters}>
                    <Select
                        labelId="currency-label"
                        id="currency"
                        value={0}
                        label="Currency"
                        onChange={handleChange}
                        className={styles.dropdown}
                    >
                        <MenuItem value={0}>USD</MenuItem>
                        <MenuItem value={1}>EUR</MenuItem>
                    </Select>
                </div>
                <div className={styles.cartContainer}>
                    {cartTotal > 0 ? <span className={styles.cartTotal}>${cartTotal}</span>: null}
                    <ShoppingCartRounded 
                        className={styles.cart}
                        fontSize={'large'}
                    />
                </div>
            </div>
            <section className={styles.toursContainer}>
                {tourData.map((tour) =>
                    <TourItem 
                        key={tour.id}
                        tour={tour}
                        addToCart={addToCart}
                        deleteFromCart={deleteFromCart}
                    />
                )}
            </section>
        </>
    );
}

export default Tours;
