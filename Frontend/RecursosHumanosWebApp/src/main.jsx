import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./Styles/index.css";
import FormProvider from "./Context/FormContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>     
        <FormProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
        </FormProvider>
    </React.StrictMode>
);
