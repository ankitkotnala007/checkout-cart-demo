import React from 'react';
import './index.css';
import ListItems from './listItems';
import QuantityController from './quantityCon';
import { fetchAllList } from '../../action/checkout';
import { useStateValue } from '../../StateProvider';

const OrdersList = ({ items }) => {
    const [{ },dispatch] = useStateValue();

    const onfetchAllListBtnClick = () => {
        fetchAllList(dispatch);
    }

    const renderFetchAllListBtn = () => {
        return <button
            className="fetchall--btn"
            onClick={onfetchAllListBtnClick}>
            retry
        </button>
    }

    return (
        <div className="orders--list">
            <div className="orders--list__head">
                <div>Items({items.length})</div>
                <div>Qty</div>
                <div>Price</div>
            </div>
            <div className="orders--list__body">
                {
                    items.length ?
                    items.map((item,ind) => {
                        return <div className="orders--list_item" key={ind+JSON.stringify(item)}>
                            <ListItems item={item}/>
                            <QuantityController 
                                id={item.id} 
                                qty={item.qty}/>
                            <div>{item.price}</div>
                        </div>
                    }) : renderFetchAllListBtn()
                }
            </div>
        </div>
    )
}

export default OrdersList;