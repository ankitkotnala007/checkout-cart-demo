import React from 'react';
import './index.css';

const OrdersTotal = ({ totalItems, totalAmount, discount, typeDiscount }) => {

    const toFixedUptoTwoDecimal = num => num.toFixed(2);

    return (
        <div className="orders--total">
            <div className="orders--total__head">
                Total
            </div>
            <div className="orders--total__items">
                <div className="orders--total__item">
                    <span>Items({totalItems})</span>
                    <span>${toFixedUptoTwoDecimal(totalAmount)}</span>
                </div>
                <div className="orders--total__item">
                    <span>Discount</span>
                    <span>-${toFixedUptoTwoDecimal(discount)}</span>
                </div>
                <div className="orders--total__item">
                    <span>Type discount</span>
                    <span>-${toFixedUptoTwoDecimal(typeDiscount)}</span>
                </div>
            </div>
            <div className="orders--total__footer">
                <span>Order Total</span>
                <span>${toFixedUptoTwoDecimal(totalAmount ? totalAmount - (discount + typeDiscount) : 0)}</span>
            </div>
        </div>
    )
}

export default OrdersTotal;