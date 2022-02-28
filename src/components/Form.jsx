import {  useState } from "react";
import "../css/Form.css";

function Form() {
  const [name, setName] = useState("");
  const [modelo, setModelo] = useState("Rexton G4");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [departamento, setDepartamento] = useState("Valle del Cauca");
  const [ciudad, setCiudad] = useState();

  const handlerName = (e) => {
    setName(e.target.value);
  };
  const handlerModelo = (e) => {
    setModelo(e.target.value);
  };

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerCelular = (e) => {
    setCelular(e.target.value);
  };
  const handlerDepartamento = (e) => {
    setDepartamento(e.target.value);
  };
  const handlerCiudad = (e) => {
    setCiudad(e.target.value);
  };

  return (
    <div>
      <form
      name="form"
        className="form"
        method="post"
        action="http://localhost/prueba-ssangyong/api/enviardatos.php"
      >
        <h1>¡Cotiza la tuya!</h1>
        <br />
        <div>
          <label>Selecciona un modelo</label> <br />
          <select
            className="border-radius"
            name="modelo"
            value={modelo}
            onChange={handlerModelo}
          >
            <option value="Rexton G4">Rexton G4</option>
            <option value="Rexton sports">Rexton Sports</option>
            <option value="Korando">Korando</option>
            <option value="XlV">XLV</option>
            <option value="Tivoli">Tivoli</option>
          </select>
        </div>
        <br />
        <label>Nombre completo</label>
        <br />
        <input
          className="border-radius"
          type="text"
          value={name}
          onChange={handlerName}
          name="nombre"
          pattern="^[a-zA-Z ]+$"
          title="Este campo debe contener solo letras"
          required
        />
        <br />
        <br />
        <label>Email</label>
        <br />
        <input
          className="border-radius"
          type="email"
          value={email}
          onChange={handlerEmail}
          name="email"
          required
        />
        <br />
        <br />
        <label>Número celular</label>
        <br />
        <input
          className="border-radius"
          type="text"
          value={celular}
          onChange={handlerCelular}
          name="celular"
          pattern="[0-9]{1,10}"
          title="Este campo debe contener solo números (máx 10 caracteres)"
          required
        />
        <br />
        <br />
        <div className="ubicacion-container">
          <div className="ubicacion">
            <label>Departamento</label>
            <select
              className="border-radius"
              name="departamento"
              value={departamento}
              onChange={handlerDepartamento}
            >
              <option value="Valle del Cauca">Valle del Cauca</option>
              <option value="Antioquia">Antioquia</option>
              <option value="Bogotá D.C.">Bogotá DC.</option>
            </select>
          </div>
          {departamento === 'Valle del Cauca' ? (
                    <div className="ubicacion">
                    <label>Ciudad</label>
                    <select
                      className="border-radius"
                      name="ciudad"
                      value={ciudad}
                      onChange={handlerCiudad}
                    >
                      <option value="Cali">Cali</option>
                      <option value="Yumbo">Yumbo</option>
                      <option value="Palmira">Palmira</option>
                    </select>
                  </div>
                  ) : departamento === 'Antioquia' ? (
                    <div className="ubicacion">
                    <label>Ciudad</label>
                    <select
                      className="border-radius"
                      name="ciudad"
                      value={ciudad}
                      onChange={handlerCiudad}
                    >
                      <option value="Medellin">Medellin</option>
                      
                    </select>
                  </div>
                  ) : (<div className="ubicacion">
                  <label>Ciudad</label>
                  <select
                    className="border-radius"
                    name="ciudad"
                    value={ciudad}
                    onChange={handlerCiudad}
                  >
                    <option value="Bogotá D.C.">Bogotá D.C.</option>
                    
                  </select>
                </div> )  }
        </div>
        <input type="checkbox" id ="checkbox" />
        <span className="politica">
          Acepto la política de Tratamiento de datos personales
        </span>
        <br />
        <br />
        <input   name ="enviar" className="button" type="submit" value="Enviar datos" />
      </form>
      

    </div>
  );
}
export default Form;
