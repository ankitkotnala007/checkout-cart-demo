export const initialState = {
    dialog : false,
    checkout : {
        cart : [],
        discount : 0,
        type_discount: 0,
        total_amount: 0
    }
}

const Reducer = (state, action) => {
    switch(action.type) {
        case "MESSAGE_VISIBILITY_ON" :
            return {
                ...state,
                dialog : true
            }
        case "MESSAGE_VISIBILITY_OFF" :
            return {
                ...state,
                dialog : false
            }
        case "FETCH_ALL_CART_DATA" : 
            return {
                ...state , checkout : action.payload
            }
        case "REMOVE_CART_ITEM" : 
            return {
                ...state , checkout : action.payload
            }
        case "CHANGE_ITEM_QTY" :
            return {
                ...state, checkout : action.payload
            }
        default: return state;
    }
}

export default Reducer;