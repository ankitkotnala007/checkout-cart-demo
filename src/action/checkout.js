import checkoutData from './../data.json';

const calculateDiscount = (price, discount) => price * (discount / 100);

const calculateCheckoutCounts = data => data.reduce((acc, curr, currentIndex, array) => {
    const qtyPrice = (curr.qty === 1 || curr.qty === undefined ) ? curr.price : curr.qty * curr.price;
    acc.discount += calculateDiscount(qtyPrice, curr.discount);
    if (curr.type === 'fiction') 
        acc.type_discount += calculateDiscount(qtyPrice, 15);
    acc.total_amount += qtyPrice;
    if (!array[currentIndex].qty) 
        array[currentIndex].qty = 1;
    return acc;
}, { discount: 0, type_discount: 0, total_amount: 0 });

export const fetchAllList = (dispatch) => {
    const newcheckoutData = JSON.parse(JSON.stringify(checkoutData))
    const { discount, type_discount, total_amount } = calculateCheckoutCounts(newcheckoutData);
    dispatch({
        type: "FETCH_ALL_CART_DATA",
        payload: {
            discount,
            type_discount,
            total_amount,
            cart: newcheckoutData
        }
    })
}

export const removeItem = (id, checkout, dispatch) => {
    const idx = checkout.cart.findIndex(item => item.id === id);
    checkout.cart.splice(idx,1);
    const { discount, type_discount, total_amount } = calculateCheckoutCounts(checkout.cart);
    dispatch({
        type: "REMOVE_CART_ITEM",
        payload: {
            discount,
            type_discount,
            total_amount,
            cart: checkout.cart
        }
    })
    dispatch({ type : "MESSAGE_VISIBILITY_ON"  });
    setTimeout(()=>dispatch({ type : "MESSAGE_VISIBILITY_OFF" }),2000);
}

export const changeItemQty = (dispatch, id, change, checkout) => {
    const idx = checkout.cart.findIndex(item => item.id === id);
    if(change === 'inc')
        checkout.cart[idx].qty += 1;
    else {
        if(checkout.cart[idx].qty === 1) return;
        checkout.cart[idx].qty -= 1; 
    }
    const { discount, type_discount, total_amount } = calculateCheckoutCounts(checkout.cart);
    dispatch({
        type: "REMOVE_CART_ITEM",
        payload: {
            discount,
            type_discount,
            total_amount,
            cart: checkout.cart
        }
    })
}