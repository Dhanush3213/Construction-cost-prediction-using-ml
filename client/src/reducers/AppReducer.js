

const reducer = (state, action) => {
    switch (action.type) {
        case "USER": {
            return { ...state, loginState: action.payload }
        }
        case "PRE_PRICE": {
            return { ...state, pri_price: action.payload }
        }
        case "UPDATE_LOCATION": {
            return { ...state, location: action.payload }
        }
        case "UPDATE_SQUAREFEET": {
            return { ...state, sqareFeet: action.payload }
        }
        case "UPDATE_BEDROOMS": {
            return { ...state, bedRooms: action.payload }
        }
        case "UPDATE_BATHROOMS": {
            return { ...state, bathRooms: action.payload }
        }

        case "Price_Projects":
            // console.log(state.pri_price);
            if (state.pri_price) {
                let low = 0;
                let high = 0;
                let tempData = state.Projects.filter((curElem, i) => {
                    low = curElem.ProjectFields.price - 10;
                    high = curElem.ProjectFields.price + 10;
                    if (low <= state.pri_price && high >= state.pri_price) {
                        return curElem;
                    }
                })
                console.log(tempData);

                return { ...state, price_Based_projects: tempData }

            }
    }
}
export default reducer;




