import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const FormularioRegistro = () => {
    const [candidate, setCandidate] = useState({});
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !candidate.first_name ||
            !candidate.last_name ||
            !candidate.email ||
            !candidate.dni ||
            !candidate.phone_number
        ) {
            return setError(true);
        }
        setError(false);

        fetch("http://127.0.0.1:8000/hiring/api/v1/candidate/", {
            method: "POST",
            body: JSON.stringify(candidate),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                navigate("/register-2");
            });
    };

    useEffect(() => {
        console.log(candidate);
    }, [candidate]);

    return (
        <form className="p-5 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex gap-2">
                <div className="flex flex-col flex-1 max-w-fit">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        className="px-2 py-0.5 border-2 border-gray-300 rounded-md"
                        onChange={(e) =>
                            setCandidate({
                                ...candidate,
                                first_name: e.target.value,
                            })
                        }
                        placeholder="Juan"
                    />
                </div>
                <div className="flex flex-col flex-1 max-w-fit">
                    <label htmlFor="apellido">Apellido:</label>
                    <input
                        type="text"
                        className="px-2 py-0.5 border-2 border-gray-300 rounded-md"
                        onChange={(e) =>
                            setCandidate({
                                ...candidate,
                                last_name: e.target.value,
                            })
                        }
                        placeholder="Pérez"
                    />
                </div>
            </div>
            <div className="flex flex-col max-w-sm">
                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    className="px-2 py-0.5 border-2 border-gray-300 rounded-md"
                    onChange={(e) =>
                        setCandidate({ ...candidate, email: e.target.value })
                    }
                    placeholder="juanperez@gmail.com"
                />
            </div>
            <div className="flex gap-2">
                <div className="flex flex-col max-w-fit">
                    <label htmlFor="dni">DNI:</label>
                    <input
                        type="text"
                        className="px-2 py-0.5 border-2 border-gray-300 rounded-md "
                        onChange={(e) =>
                            setCandidate({ ...candidate, dni: e.target.value })
                        }
                        placeholder="12345678"
                    />
                </div>
                <div className="flex flex-col max-w-fit">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="text"
                        className="px-2 py-0.5 border-2 border-gray-300 rounded-md"
                        onChange={(e) =>
                            setCandidate({
                                ...candidate,
                                phone_number: e.target.value,
                            })
                        }
                        placeholder="+5491112345678"
                    />
                </div>
            </div>
            {error && (
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
