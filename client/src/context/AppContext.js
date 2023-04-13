import { createContext, useContext, useReducer } from "react";
// import axios from "axios";
import reducer from "../reducers/AppReducer";

// Creating the Context
const AppContext = createContext();


let loginState = () => {
    let state = JSON.parse(localStorage.getItem("login"));
    return state;
}

// Initial-state for API-fetching
const initialState = {
    loginState: loginState(),
    isLoading: false,
    isError: false,
    pri_price: 0,
    // products: [],
    // featureProducts: [],
    // singleproduct: {},
    // is_signle_Loading: false,
    // is_single_Error: false,
};

// console.log(initialState.featureProducts);
// Provider for App
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>{children}</AppContext.Provider>
    );
};

// Custom Hook for useConext Hook.
const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useAppContext };