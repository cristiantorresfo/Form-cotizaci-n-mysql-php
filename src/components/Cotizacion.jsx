import "../css/Cotizacion.css";
import Form from "./Form";

function Cotizacion () {
    return (
        <div className="cotizacion-container">
            <div className="logos-container">
                <img src="../images/imagen 3.png" alt="logo" />
                <img src="../images/imagen 2.png" alt="logo" />
            </div>            
            <Form/>
        </div>
    )
}

export default Cotizacion;