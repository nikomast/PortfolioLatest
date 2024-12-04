import React, { useState } from 'react';
import InputField from './InputField';
import './DeliveryFeeCalculator.css';


const DeliveryFeeCalculator = () => {
    const [cartValue, setCartValue] = useState(0);
    const [deliveryDistance, setDeliveryDistance] = useState(0);
    const [numItems, setNumItems] = useState(0);
    const [orderTime, setOrderTime] = useState(new Date());
    const [deliveryFee, setDeliveryFee] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const handleCalculate = () => {
        let totalDeliveryFee = 0;
        setErrorMessage('');

        //The delivery is free (0€) when the cart value is equal or more than 200€.
        if(cartValue < 200){

        //If the cart value is less than 10€, a small order surcharge is added to the delivery price. The surcharge is the difference between the cart value and 10€. For example if the cart value is 8.90€, the surcharge will be 1.10€.
        if(cartValue < 10){
          let surcharge = 10 - cartValue;
          totalDeliveryFee += surcharge;
        }
        //Even if the distance would be shorter than 500 meters, the minimum fee is always 1€.
        if(deliveryDistance <= 500){
            totalDeliveryFee += 1;
        }
        //A delivery fee for the first 1000 meters (=1km) is 2€
        else{
            totalDeliveryFee += 2;

            //If the delivery distance is longer than that, 1€ is added for every additional 500 meters that the courier needs to travel before reaching the destination.
            if(deliveryDistance > 1000){
                let distance = deliveryDistance - 1000;
                let additions = Math.ceil(distance / 500);
                totalDeliveryFee += additions;
            }
        }

        //If the number of items is five or more, an additional 50 cent surcharge is added for each item above and including the fifth item.
        if(numItems >= 5){
            let surcharge = 0.5;
            totalDeliveryFee += (numItems - 4) * surcharge;
            //An extra "bulk" fee applies for more than 12 items of 1,20€
            if(numItems > 12){
                let bulk = 1.2;
                totalDeliveryFee += bulk;
            }
        }

        let dayOfWeek = orderTime.getDay();
        let hour = orderTime.getHours();

        //During the Friday rush, 3 - 7 PM
        if (dayOfWeek === 5 && hour >= 15 && hour < 19) { 
            //the delivery fee will be multiplied by 1.2x.
            totalDeliveryFee *= 1.2;
        }

        //The delivery fee can never be more than 15€, including possible surcharges.
        if(totalDeliveryFee > 15){
            totalDeliveryFee = 15;
        }
    }
    else{
        totalDeliveryFee = 0;
    }

    if (cartValue <= 0 || deliveryDistance <= 0 || numItems <= 0) {
        setErrorMessage('Please ensure all fields are filled with valid values.');
        return;
    }
    
    setDeliveryFee(totalDeliveryFee);

    };
    

    const handleCartValueChange = (e) => {
        let value = parseFloat(e.target.value);
        value = isNaN(value) ? 0 : value < 0 ? 0 : value;
        setCartValue(value);
    };

    const handleDeliveryDistanceChange = (e) => {
        let value = parseInt(e.target.value, 10);
        value = isNaN(value) ? 0 : value < 0 ? 0 : value;
        setDeliveryDistance(value);
    };

    const handleNumItemsChange = (e) => {
        let value = parseInt(e.target.value, 10);
        value = isNaN(value) ? 0 : value < 0 ? 0 : value;
        setNumItems(value);
    };
    


   
    return (
        <div className="calculator-container">
            <h2 className="center-text loan-title">Delivery Fee Calculator</h2>
            <InputField
                label="Cart Value"
                type="number"
                value={cartValue}
                onChange={handleCartValueChange}
                onBlur={handleCartValueChange}
                dataTestId="cartValue"
                className="custom-input-text-color"
            />
            <InputField
                label="Delivery Distance"
                type="number"
                value={deliveryDistance}
                onChange={handleDeliveryDistanceChange}
                onBlur={handleDeliveryDistanceChange}
                dataTestId="deliveryDistance"
                className="custom-input-text-color"
            />
            <InputField
                label="Amount of Items"
                type="number"
                value={numItems}
                onChange={handleNumItemsChange}
                onBlur={handleNumItemsChange}
                dataTestId="numItems"
                className="custom-input-text-color"
            />
            <InputField
                label="Order Time"
                type="datetime-local"
                value={orderTime.toISOString().slice(0, 16)}
                onChange={(e) => setOrderTime(new Date(e.target.value))}
                dataTestId="orderTime"
                className="custom-input-text-color"
            />
            <button onClick={handleCalculate}>Calculate Delivery Fee</button>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="fee-container">
            <p>Delivery Price</p>
            <div data-test-id="fee" className="fee-value">{deliveryFee}</div>
        </div>
        </div>
    );

};

export default DeliveryFeeCalculator;