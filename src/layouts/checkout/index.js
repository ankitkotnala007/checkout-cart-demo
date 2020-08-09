import React, { Component, useEffect } from 'react';
import './index.css';
import Header from '../../components/header';
import OrdersList from '../../components/ordersLists';
import OrdersTotal from '../../components/ordersTotal';
import Dialog from '../../components/dialog';
import { useStateValue } from '../../StateProvider';
import { fetchAllList } from './../../action/checkout';

const Checkout = props => {
    const [{ dialog, checkout }, dispatch] = useStateValue();
    useEffect (()=> {
        fetchAllList(dispatch)
    },[]) 

    return (
        <div className="checkout">
            <Header />
            <div className="checkout--layout">
                {dialog && <Dialog message="Item deleted !" />}
                <div className="checkout--layout__head">
                    <span>
                        {'<'} Orders Summary
                        </span>
                </div>
                <div className="checkout--layout__body">
                    <OrdersList items={[...checkout.cart]} />
                    <OrdersTotal
                        totalItems={checkout.cart.length}
                        totalAmount={checkout.total_amount}
                        discount={checkout.discount}
                        typeDiscount={checkout.type_discount} />
                </div>
            </div>
        </div>
    )
}

export default Checkout;
