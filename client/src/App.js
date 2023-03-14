import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./CostEstimation"
import Contact from "./Contact"
import Projects from "./Projects"
import SingleProject from "./SingleProject"
import Wishlist from "./Wishlist"
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./ErrorPage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";


const App = () => {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      // btn: "rgb(98 84 243)",
      btn: "#035bc7",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/priceestimator" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/singleProject/:id" element={<SingleProject />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
