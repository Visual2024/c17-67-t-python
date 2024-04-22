import React, { useContext } from "react";
import { FormularioRegistro } from "./Form/FormularioRegistro";
import { FormContext } from "../Context/FormContext";

export function ModalCandidatos({ formSwitch }) {
    const { paso } = useContext(FormContext);
    return (
        <section>
            <header className="flex items-center justify-center w-full mb-24">
                <div className="text-white w-16 h-16 flex items-center justify-center bg-primary rounded-xl">
                    1
                </div>
                <div
                    className={`h-[3px] w-[100px] ${
                        paso !== 1 ? "bg-primary" : "bg-gray-400"
                    }`}
                ></div>
                <div
                    className={`text-white w-16 h-16 flex items-center justify-center ${
                        paso !== 1 ? "bg-primary" : "bg-gray-400"
                    } rounded-xl`}
                >
                    2
                </div>
                <div
                    className={`h-[3px] w-[100px] ${
                        paso === 3 ? "bg-primary" : "bg-gray-400"
                    }`}
                ></div>
                <div
                    className={`text-white w-16 h-16 flex items-center justify-center ${
                        paso === 3 || paso === 4 ? "bg-primary" : "bg-gray-400"
                    } rounded-xl`}
                >
                    3
                </div>
            </header>

            <div>
                <FormularioRegistro />
            </div>
        </section>
    );
}
