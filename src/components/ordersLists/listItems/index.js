import React from 'react';
import './index.css';
import { useStateValue } from './../../../StateProvider';
import { removeItem } from './../../../action/checkout';

const ListItems = ({ item : {id, name, img_url } }) => {

    const [{ checkout },dispatch] = useStateValue();

    const onRemoveItemClicked = id => {
        removeItem(id, checkout, dispatch);
    }

    return (
        <div className="list--item">
            <img src={img_url}></img>
            <div>{name}</div>
            <div onClick={()=>onRemoveItemClicked(id)}>X</div>
        </div>
    )
}

export default ListItems;