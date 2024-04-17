import React from "react";

export default class ErrorBoundary extends React.Component {

    constructor (props){
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error){

        return {hasError: true}
    }

    render() {
        if(this.state.hasError){
            return <div className="flex flex-col justify-center items-center box-border self-center gap-2">
                <h1 className="text-gray-600 text-4xl font-bold m-10">Ha ocurrido un error</h1>
                <a className=" underline text-lg" href='/'>ir a Home</a>
                <a className=" underline text-lg" href='/GestionDeUsuarios'>ir a GestionDeUsuarios</a>
                <a className=" underline text-lg" href='/GestionDeEmpleados'>ir a GestionDeEmpleados</a>
                <a className=" underline text-lg" href='/Gestionfinancieragerente'>ir a Gestionfinancieragerente</a>
                <a className=" underline text-lg" href='/DatosPersonales/1'>ir a DatosPersonales</a>
                <a className=" underline text-lg" href='/Login'>ir a Login</a>
            </div>
        }
        return this.props.children
    }
}