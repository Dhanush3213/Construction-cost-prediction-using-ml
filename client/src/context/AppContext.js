import { createContext, useContext, useReducer } from "react";
// import axios from "axios";
import reducer from "../reducers/AppReducer";

// Creating the Context
const AppContext = createContext();

// const API = "https://api.pujakaitem.com/api/products";

let loginState = () => {
    let state = JSON.parse(localStorage.getItem("login"));
    return state;
}

// Initial-state for API-fetching
const initialState = {
    loginState: loginState(),
    // isLoading: false,
    // isError: false,
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

    // const getProducts = async (url) => {
    //     dispatch({ type: "SET_LOADING" });
    //     try {
    //         const res = await axios.get(url);
    //         const products = await res.data;
    //         dispatch({ type: "SET_API_DATA", payload: products });
    //     } catch (error) {
    //         dispatch({ type: "API_ERROR" });
    //     }
    // };

    // const getSingleProducts = async (url) => {
    //     dispatch({ type: "SET_SINGLE_LOADING" });
    //     try {
    //         const res = await axios.get(url);
    //         const singleproduct = await res.data;
    //         dispatch({ type: "SET_SINGLE_PRODUCT_DATA", payload: singleproduct });
    //     } catch (error) {
    //         dispatch({ type: "SINGLE_PRODUCT_ERROR" });
    //     }
    // };

    // useEffect(() => {
    //     getProducts(API);
    // }, []);

    return (
        <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
    );
};

// Custom Hook for useConext Hook.
const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useAppContext };