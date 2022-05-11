import { useState } from "react";

export const useCurrency = () => {
    //0 is USD
    //1 is EUR
    const [currency, setCurrency] = useState(0);

    const getCurrencyConversion = (price) => {
        if(currency === 0) {
            return <span>{'$' + price}</span>;
        } else if (currency === 1) {
            //use conversion of .95 EUR to 1 USD
            return <span>{'\u20AC' + (price * .95).toFixed(2)}</span>;
        }
    }
  
    return {
        currency, 
        setCurrency,
        getCurrencyConversion
    }
}