import { useState, useContext } from "react";
import { FormContext } from "../../Context/FormContext";
import Swal from "sweetalert2";
import { Box, Modal } from "@mui/material";
import { FormularioRegistro } from "./FormularioRegistro";

export const LoginFormRegis = () => {
    // const [verFormRegistro, setVerFormRegistro] = useState(false);
    const {
        puestoDeTrabajo,
        setPuestoDeTrabajo,
        verFormRegistro,
        setVerFormRegistro,
        formSwitch,
    } = useContext(FormContext);

    // const formSwitch = () => {
    //     setVerFormRegistro(!verFormRegistro);
    // };

    const style = {
        position: "absolute",
        top: "20%",
        bgcolor: "background.paper",
        boxShadow: 15,
    };

    const selectOnChange = (event) => {
        setPuestoDeTrabajo(event.target.value);
    };

    const registrateClick = (event) => {
        event.preventDefault();
        if (puestoDeTrabajo === "") {
            return Swal.fire("Selecciona un Puesto de trabajo");
        }
        return formSwitch();
    };

    return (
        <>
            <form onSubmit={registrateClick} className="flex flex-col">
                <h2 className="text-gray-600 text-3xl font-semibold">
                    Trabaja con nosotros!
                </h2>
                <p className="text-sm text-gray-600">
                    Tu próximo desafío laboral comienza aquí
                </p>
                <select
                    value={puestoDeTrabajo}
                    onChange={selectOnChange}
                    className="text-gray-600 rounded-full border border-gray-400 mt-7 mb-8 p-2 box-border"
                >
                    <option value="">Selecciona un puesto de trabajo</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                </select>
                <button className="text-white text-lg  p-2 rounded-full bg-primary hover:bg-blue-900">
                    Regístrate
                </button>
            </form>

            <Modal
                open={verFormRegistro}
                onClose={formSwitch}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={style}
                    className="w-full sm:w-[600px] h-[420px] sm:right-[5%] p-10 rounded-md select-none"
                >
                    <FormularioRegistro
                        formSwitch={formSwitch}
                        puestoDeTrabajo={puestoDeTrabajo}
                    />
                </Box>
            </Modal>
        </>
    );
};
