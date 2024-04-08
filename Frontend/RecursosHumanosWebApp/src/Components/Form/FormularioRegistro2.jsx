export const FormularioRegistro2 = () => {
    return (
        <div className="p-5 space-y-5">
            <div className="flex gap-5">
                <p>Actualmente:</p>
                <div className="flex gap-1">
                    <input type="radio" name="trabajo" id="" />
                    <label htmlFor="">Tengo trabajo</label>
                </div>
                <div className="flex gap-1">
                    <input type="radio" name="trabajo" id="" />
                    <label htmlFor="">Busco empleo</label>
                </div>
                <div className="flex gap-1">
                    <input type="radio" name="trabajo" id="" />
                    <label htmlFor="">Estudio</label>
                </div>
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
    );
};
