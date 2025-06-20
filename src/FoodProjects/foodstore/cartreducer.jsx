const AddItem = 'add/cartitems'
const RemoveItem = 'remove/cartitems'
const IncreaseQuantity = 'add/cartIncreseQuantity'
const DecreseQuantity = 'add/cartDecreseQuantity'

export function handleadditem(productdata) {
    return { type: AddItem, payload:productdata }
}
export function handleremoveitem(productdata) {
    return { type: RemoveItem, payload: productdata }
}

export function handleincreasequantity(productdata) {
    return { type: IncreaseQuantity, payload:productdata }

}
export function handledecreasequantity(productdata){
    return{type: DecreseQuantity, payload: productdata}
}
const initialState = {
    cartlist: []
};
export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case AddItem:
            const existing = state.cartlist.find(
                (item) => item.id === action.payload.id
            );
            if (existing) {
                return {
                    ...state, cartlist: state.cartlist.map((item) => {
                        if (item.id === existing.id) {
                            return { ...item, quantity: item.quantity + 1 }
                        }
                        return item
                    })

                }

            } else {
                return {
                    ...state,
                    cartlist: [...state.cartlist, action.payload]
                };
            }
        case RemoveItem:
            return {
                ...state,
                cartlist: state.cartlist.filter(
                    (item) => item.id !== action.payload.id
                )
            };
        case IncreaseQuantity:
            return {
                ...state,
                cartlist: state.cartlist.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                })
            };
        case DecreseQuantity: {
            return {
                ...state,
                cartlist: state.cartlist
                    .map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter((item) => item.quantity > 0) // remove if quantity 0
            };
        }

        default:
            return state
    }

}