import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { validateName, validateDNI, validateEmail, validatePhoneNumber } from "../../utils/regexValidation";

export const FormularioRegistro = () => {
    const [candidate, setCandidate] = useState({});
    const [error, setError] = useState({ firstState: true });
    const navigate = useNavigate();

    const endpoint = import.meta.env.VITE_API_KEY

    console.log(endpoint);
    const validateFields = (candidate) => {
        setError({
            first_name: !validateName(candidate.first_name),
            last_name: !validateName(candidate.last_name),
            email: !validateEmail(candidate.email),
            dni: !validateDNI(candidate.dni),
            phone_number: !validatePhoneNumber(candidate.phone_number),
        });
        return {
            first_name: !validateName(candidate.first_name),
            last_name: !validateName(candidate.last_name),
            email: !validateEmail(candidate.email),
            dni: !validateDNI(candidate.dni),
            phone_number: !validatePhoneNumber(candidate.phone_number),
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !candidate.first_name ||
            !candidate.last_name ||
            !candidate.email ||
            !candidate.dni ||
            !candidate.phone_number
        ) {
            return setError({ allFields: true });
        }
        const validatedFields = validateFields(candidate);
        if (
            validatedFields.firstState ||
            validatedFields.first_name ||
            validatedFields.last_name ||
            validatedFields.email ||
            validatedFields.phone_number ||
            validatedFields.dni
        )
            return;

        fetch(`${endpoint}/api/v1/candidate/`, {
            method: "POST",
            body: JSON.stringify(candidate),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json()).then(data => {
            console.log(data)
            navigate("/register-2")
        })
    };

    return (
        <form className="p-5 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex gap-2">
                <div className="flex flex-col flex-1 max-w-fit">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        className={twMerge(
                            "px-2 py-0.5 border-2 border-gray-300 rounded-md",
                            error.first_name && "border-red-500"
                        )}
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
                        <p className="text-red-500">Algo ha salido mal</p>
                    )}
                </div>
                <div className="flex flex-col flex-1 max-w-fit">
                    <label htmlFor="apellido">Apellido:</label>
                    <input
                        type="text"
                        className={twMerge(
                            "px-2 py-0.5 border-2 border-gray-300 rounded-md",
                            error.last_name && "border-red-500"
                        )}
                        onChange={(e) => {
                            setError((prevErrors) => ({
                                ...prevErrors,
                                last_name: false,
                                allFields: false,
                            }));
                            return setCandidate({
                                ...candidate,
                                last_name: e.target.value,
                            });
                        }}
                        placeholder="Pérez"
                    />
                    {error.last_name && (
                        <p className="text-red-500">Algo ha salido mal</p>
                    )}
                </div>
            </div>
            <div className="flex flex-col max-w-sm">
                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    className={twMerge(
                        "px-2 py-0.5 border-2 border-gray-300 rounded-md",
                        error.email && "border-red-500"
                    )}
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
                    placeholder="juanperez@gmail.com"
                />
                {error.email && (
                    <p className="text-red-500">Algo ha salido mal</p>
                )}
            </div>
            <div className="flex gap-2">
                <div className="flex flex-col max-w-fit">
                    <label htmlFor="dni">DNI:</label>
                    <input
                        type="text"
                        className={twMerge(
                            "px-2 py-0.5 border-2 border-gray-300 rounded-md",
                            error.dni && "border-red-500"
                        )}
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
                        <p className="text-red-500">Algo ha salido mal</p>
                    )}
                </div>
                <div className="flex flex-col max-w-fit">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="text"
                        className={twMerge(
                            "px-2 py-0.5 border-2 border-gray-300 rounded-md",
                            error.phone_number && "border-red-500"
                        )}
                        onChange={(e) => {
                            setError((prevErrors) => ({
                                ...prevErrors,
                                phone_number: false,
                                allFields: false,
                            }));
                            return setCandidate({
                                ...candidate,
                                phone_number: e.target.value,
                            });
                        }}
                        placeholder="+5491112345678"
                    />
                    {error.phone_number && (
                        <p className="text-red-500">Algo ha salido mal</p>
                    )}
                </div>
            </div>
            {error.allFields && (
                <p className="text-red-500">Faltan campos por completar</p>
            )}
            <button
                type="submit"
                className="py-2 px-5 max-w-fit bg-primary hover:bg-primary/90 text-white rounded-lg"
            >
                Enviar
            </button>
        </form>
    );
};
