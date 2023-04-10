

const reducer = (state, action) => {
    switch (action.type) {
        case "USER": {
            return { ...state, loginState: action.payload }
        }
        case "PRE_PRICE": {
            return { ...state, pri_price: action.payload }
        }
        default: return state;
    }

}
export default reducer;