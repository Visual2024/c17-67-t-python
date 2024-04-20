export const getPuestoDeTrabajo = (candidate) => {
    let str = candidate.last_name;
    let words = str.split(" ");
    let puesto = words.find(
        (word) => word === "Frontend" || word === "Backend"
    );
    return puesto;
};


export const getLastName = (candidate) => {
    if (candidate.last_name) {
        let str = candidate.last_name;
        let words = str.split(" ");
        words.pop();
        return words.join(" ");
    } else {
        return "";
    }
};
