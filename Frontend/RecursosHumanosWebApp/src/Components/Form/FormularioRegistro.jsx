import { useNavigate } from "react-router-dom";
import {
    validateName,
    validateDNI,
    validateEmail,
    validatePhoneNumber,
} from "../../utils/regexValidation";
import { useState, useContext, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { FormContext } from "../../Context/FormContext";
import Swal from "sweetalert2";

export const FormularioRegistro = () => {
    // const [candidate, setCandidate] = useState({});
    // const [error, setError] = useState({ firstState: true });
    const {
        candidate,
        setCandidate,
        puestoDeTrabajo,
        formSwitch,
        paso,
        pasoSiguiente,
        pasoAnterior,
        error,
        setError,
    } = useContext(FormContext);

    const endpoint = import.meta.env.VITE_API_KEY;

    // const validateFields = (candidate) => {
    //     setError({
    //         first_name: !validateName(candidate.first_name),
    //         last_name: !validateName(candidate.last_name),
    //         email: !validateEmail(candidate.email),
    //         dni: !validateDNI(candidate.dni),
    //         phone_number: !validatePhoneNumber(candidate.phone_number),
    //     });
    //     return {
    //         first_name: !validateName(candidate.first_name),
    //         last_name: !validateName(candidate.last_name),
    //         email: !validateEmail(candidate.email),
    //         dni: !validateDNI(candidate.dni),
    //         phone_number: !validatePhoneNumber(candidate.phone_number),
    //     };
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (
    //         !candidate.first_name ||
    //         !candidate.last_name ||
    //         !candidate.email ||
    //         !candidate.dni
    //     ) {
    //         return setError({ allFields: true });
    //     }

    //     fetch(`http://127.0.0.1:8000/hiring/api/v1/candidate/`, {
    //         method: "POST",
    //         body: JSON.stringify(candidate),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             Swal.fire({
    //                 title: "¡Postulación exitosa!",
    //                 text: "Gracias por postularte",
    //                 icon: "success",
    //                 confirmButtonText: "Ok",
    //             });
    //             return formSwitch();
    //         });
    // };

    // TODO Agregar los campos de los pasos 2 y 3 y renderizarlos usando el paso que se recibe como prop
    return (
        <form className="p-5 flex flex-col gap-2">
            {/* Primer paso */}
            {paso === 1 && (
                <div>
                    <div className="flex gap-2">
                        <div className="flex flex-col flex-1 max-w-fit">
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                type="text"
                                className={twMerge(
                                    "px-2 py-2 border-2 border-gray-300 rounded-md",
                                    error.first_name && "border-red-500"
                                )}
                                value={candidate.first_name || ""}
                                onChange={(e) => {
                                    setError((prevErrors) => ({
                                        ...prevErrors,
                                        first_name: false,
                                        allFields: false,
                                    }));
                                    return setCandidate({
                                        ...candidate,
                                        first_name: e.target.value,
                                    });
                                }}
                                placeholder="Juan"
                            />
                            {error.first_name && (
                                <p className="text-red-500">
                                    Algo ha salido mal
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col flex-1 max-w-fit">
                            <label htmlFor="apellido">Apellido:</label>
                            <input
                                type="text"
                                className={twMerge(
                                    "px-2 py-2 border-2 border-gray-300 rounded-md",
                                    error.last_name && "border-red-500"
                                )}
                                // value={candidate.last_name || ""}
                                onChange={(e) => {
                                    setError((prevErrors) => ({
                                        ...prevErrors,
                                        last_name: false,
                                        allFields: false,
                                    }));
                                    return setCandidate({
                                        ...candidate,
                                        last_name:
                                            e.target.value +
                                            " " +
                                            puestoDeTrabajo,
                                    });
                                }}
                                placeholder="Pérez"
                            />
                            {error.last_name && (
                                <p className="text-red-500">
                                    Algo ha salido mal
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex flex-col max-w-fit">
                            <label htmlFor="dni">DNI:</label>
                            <input
                                type="text"
                                className={twMerge(
                                    "px-2 py-2 border-2 border-gray-300 rounded-md",
                                    error.dni && "border-red-500"
                                )}
                                value={candidate.dni || ""}
                                onChange={(e) => {
                                    setError((prevErrors) => ({
                                        ...prevErrors,
                                        dni: false,
                                        allFields: false,
                                    }));
                                    return setCandidate({
                                        ...candidate,
                                        dni: e.target.value,
                                    });
                                }}
                                placeholder="12345678"
                            />
                            {error.dni && (
                                <p className="text-red-500">
                                    Algo ha salido mal
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col max-w-fit">
                            <label htmlFor="telefono">
                                Fecha de nacimiento:
                            </label>
                            <input
                                type="date"
                                className={twMerge(
                                    "px-2 py-2 border-2 border-gray-300 rounded-md",
                                    error.secondary_phone_number &&
                                        "border-red-500"
                                )}
                                value={candidate.secondary_phone_number || ""}
                                onChange={(e) => {
                                    setError((prevErrors) => ({
                                        ...prevErrors,
                                        secondary_phone_number: false,
                                        allFields: false,
                                    }));
                                    return setCandidate({
                                        ...candidate,
                                        secondary_phone_number: e.target.value,
                                    });
                                }}
                            />
                            {error.secondary_phone_number && (
                                <p className="text-red-500">
                                    Algo ha salido mal
                                </p>
                            )}
                        </div>
                    </div>
                    {error.allFields && (
                        <p className="text-red-500">
                            Faltan campos por completar
                        </p>
                    )}
                </div>
            )}
            {/* Segundo paso */}
            {paso === 2 && (
                <div className="p-5 space-y-5">
                    <div className="flex items-center gap-5">
                        <label htmlFor="dni">Email:</label>
                        <input
                            type="text"
                            className={twMerge(
                                "px-2 py-2 border-2 border-gray-300 rounded-md",
                                error.email && "border-red-500"
                            )}
                            value={candidate.email || ""}
                            onChange={(e) => {
                                setError((prevErrors) => ({
                                    ...prevErrors,
                                    email: false,
                                    allFields: false,
                                }));
                                return setCandidate({
                                    ...candidate,
                                    email: e.target.value,
                                });
                            }}
                            placeholder="12345678"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="cargo">Cargo:</label>
                        <input
                            type="text"
                            name="cargo"
                            id="cargo"
                            className="px-2 py-0.5 border-2 border-gray-300 rounded-md"
                            placeholder="Docente"
                        />
                    </div>
                </div>
            )}
            <div
                className={`flex ${
                    paso === 1 ? "justify-end" : "justify-between"
                } mt-5`}
            >
                {paso !== 1 && (
                    <button
                        onClick={pasoAnterior}
                        className=" w-32 p-1 rounded-2xl border border-primary hover:bg-primary hover:text-white hover:border-none"
                    >
                        Regresar
                    </button>
                )}
                {paso !== 3 ? (
                    <button
                        className=" w-32 p-1 rounded-2xl border border-primary hover:bg-primary hover:text-white hover:border-none"
                        onClick={pasoSiguiente}
                    >
                        Próximo
                    </button>
                ) : (
                    <button
                        className=" w-32 p-1 rounded-2xl border border-primary hover:bg-primary hover:text-white hover:border-none"
                        onClick={formSwitch}
                    >
                        Finalizar
                    </button>
                )}
            </div>

            {/* <button
                type="submit"
                className="py-2 px-5 max-w-fit bg-primary hover:bg-primary/90 text-white rounded-lg"
            >
                Enviar
            </button> */}
        </form>
    );
};
