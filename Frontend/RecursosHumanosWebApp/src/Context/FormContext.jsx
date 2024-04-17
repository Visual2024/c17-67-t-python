import { createContext } from "react";
import { useState } from "react";

export const FormContext = createContext();

function FormProvider({ children }) {
    const [count, setCount] = useState(3);
    const [puestoDeTrabajo, setPuestoDeTrabajo] = useState("");
    const [verFormRegistro, setVerFormRegistro] = useState(false);

    const formSwitch = () => {
        setVerFormRegistro(!verFormRegistro);
    };

    
    return (
        <FormContext.Provider
            value={{
                count,
                setCount,
                puestoDeTrabajo,
                setPuestoDeTrabajo,
                verFormRegistro,
                setVerFormRegistro,
                formSwitch,
            }}
        >
            {children}
        </FormContext.Provider>
    );
}

export default FormProvider;
