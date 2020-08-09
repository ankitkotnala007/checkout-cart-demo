import React from 'react';
import './index.css';
import { changeItemQty } from '../../../action/checkout';
import { useStateValue } from '../../../StateProvider';

const QuantityController = ({ id, qty }) => {
    const [{  checkout }, dispatch] = useStateValue();
    
    const onChangeQtyClicked = (id , change) => {
        changeItemQty(dispatch, id, change, checkout);
    }

    return (
        <div className="quantity--con">
            <div className="quantity--con__btn" 
                onClick={() => onChangeQtyClicked(id , 'dec')}>
                -
            </div>
            <div className="quantity--con__count">
                {qty}
            </div>
            <div className="quantity--con__btn" 
                onClick={() => onChangeQtyClicked(id , 'inc')}>
                +
            </div>
        </div>
    )
}

export default QuantityController;