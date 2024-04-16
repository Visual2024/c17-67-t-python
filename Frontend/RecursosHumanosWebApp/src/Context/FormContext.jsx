import { createContext } from "react";
import { useState } from "react";
import {
    validateName,
    validateDNI,
    validateEmail,
    validatePhoneNumber,
} from "../utils/regexValidation";

export const FormContext = createContext();

function FormProvider({ children }) {
    const [count, setCount] = useState(3);
    const [paso, setPaso] = useState(1);
    const [candidate, setCandidate] = useState({});
    const [error, setError] = useState({ firstState: true });
    const [puestoDeTrabajo, setPuestoDeTrabajo] = useState("");
    const [verFormRegistro, setVerFormRegistro] = useState(false);

    const validateFirstStepFields = (candidate) => {
        setError({
            first_name: !validateName(candidate.first_name),
            last_name: !validateName(candidate.last_name),
            dni: !validateDNI(candidate.dni),
        });
        return {
            first_name: !validateName(candidate.first_name),
            last_name: !validateName(candidate.last_name),
            dni: !validateDNI(candidate.dni),
        };
    };

    const pasoSiguiente = (e) => {
        e.preventDefault();
        if (paso === 1) {
            if (
                !candidate.first_name ||
                !candidate.last_name ||
                !candidate.dni ||
                !candidate.secondary_phone_number
            ) {
                return setError({ allFields: true });
            }
            const validatedFields = validateFirstStepFields(candidate);
            if (
                validatedFields.firstState ||
                validatedFields.first_name ||
                validatedFields.last_name ||
                validatedFields.secondary_phone_number ||
                validatedFields.dni
            ) {
                console.log(validatedFields);
                return;
            }
            setPaso((prev) => prev + 1);
            console.log(candidate);

            console.log(paso);
        }
    };

    const pasoAnterior = (e) => {
        e.preventDefault();
        setPaso((prev) => prev - 1);
        console.log(paso);
    };

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
                paso,
                pasoSiguiente,
                pasoAnterior,
                candidate,
                setCandidate,
                error,
                setError,
            }}
        >
            {children}
        </FormContext.Provider>
    );
}

export default FormProvider;
