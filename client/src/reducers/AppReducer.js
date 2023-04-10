

const reducer = (state, action) => {
    switch (action.type) {
        case "USER": {
            let login = action.payload;
            return { ...state, loginState: login }
        }

        default: return state;
    }

}
export default reducer;