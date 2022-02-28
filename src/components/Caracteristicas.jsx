import "../css/Caracteristicas.css";

function Caracteristicas() {
  return (
    <div className="caracteristicas-container">
      <div className="korando">
        <img src="../images/logo-korando.png" alt="logo" />
        <p>Un emblema Coreano que representa tradición y confianza</p>
      </div>
      <div className="caracteristicas">
        <h1>Características</h1>
        <div className="caracteristica-container">
          <div className="text-description">
            <p className="titulo-caracteristica">
              <strong>Sub chasis</strong> Delantero y trasero
            </p>
            <br />
            <p>
              <strong>Subchasis completo delantero y trasero reforzado</strong>
              que incrementa la seguridad vehicular, resistiendo la deformación
              frente a una colisión, absorbe la vibración de la superficie del
              camino, mejorando la estabilidad vehicular.
            </p>
          </div>
          <img className="first-image" src="../images/imagen 5.png" alt="img" />
        </div>
        <div className="caracteristica-container">
          <img src="../images/Enmascarar grupo 1.png" alt="img" />
          <div className="text-description">
            <p className="titulo-caracteristica">
              Motor <strong>2.0 147</strong> HP 197 <strong>NM</strong>
            </p>
            <br />
            <p>
              <strong>
                A las 1.500 revoluciones el motor genera el 80% de su fuerza.
              </strong>
              Haciendo de Korando una camioneta con un excelente desempeño.
            </p>
          </div>
        </div>
        <div className="caracteristica-container">
          <div className="text-description">
            <p className="titulo-caracteristica">
              Sistema Electrónico de <strong>Estabilidad (ESP)</strong>
            </p>
            <br />
            <p>
              Emplea una combinación de intervención del acelerador y frenado en
              cada rueda para ayudar a mantener mayor estabilidad sobre todo
              tipo de superficies y <strong>prevención de accidentes.</strong>
            </p>
          </div>
          <img src="../images/Enmascarar grupo 2.png" alt="img" />
        </div>
        <div className="caracteristica-container">
          <img src="../images/grupo 3.png" alt="img" />
          <div className="text-description">
            <p className="titulo-caracteristica">
              Interior <strong>muy espacioso</strong>
            </p>
            <br />
            <p>
              <strong>
                Realza la sensación de comodidad en sus ocupantes,
              </strong>
              además, es un vehículo pensado también los pasajeros traseros,
              dándoles la posibilidad de reclinar sus sillas e ir mucho mas
              cómodos.
            </p>
          </div>
        </div>
        <div className="caracteristica-container">
          <div className="text-description">
            <p className="titulo-caracteristica">
              Completo sistema de
              <strong>luces LED</strong>
            </p>
            <br />
            <p>Resaltan la imagen delantera y trasera de la camioneta.</p>
          </div>
          <img src="../images/Enmascarar grupo 4.png" alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Caracteristicas;
