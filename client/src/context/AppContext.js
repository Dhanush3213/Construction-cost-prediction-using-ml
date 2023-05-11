import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/AppReducer";
import { HouseData } from "../Constants"
// Creating the Context
const AppContext = createContext();


let loginState = () => {
    let state = JSON.parse(localStorage.getItem("login"));
    return state;
}

// Initial-state for API-fetching
const initialState = {
    Projects: HouseData,
    price_Based_projects: [],
    loginState: loginState(),
    isLoading: false,
    isError: false,
    pri_price: 0,
    houseData: HouseData,
    location: "",
    sqareFeet: "",
    bedRooms: "",
    bathRooms: ""

};

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