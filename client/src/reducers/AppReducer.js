// const Reducer = (state, action) => {
//     switch (action.type) {

//         default: return state;
//     }
// }



const reducer = (state, action) => {
    switch (action.type) {
        case "USER": return state = action.payload;

        default: return state;
    }

}
export default reducer;