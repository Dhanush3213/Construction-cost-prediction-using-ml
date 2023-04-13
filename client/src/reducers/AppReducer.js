

const reducer = (state, action) => {
    switch (action.type) {
        case "USER": {
            return { ...state, loginState: action.payload }
        }
        case "PRE_PRICE": {
            return { ...state, pri_price: action.payload }
        }
    }
}
export default reducer;