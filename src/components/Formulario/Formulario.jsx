import { NavLink } from "react-router-dom";
import "./Formulario.css";

const Form = () => {
  return (
    <>
      <div className="contenedorNav">
        <div className="regresoHome">
          <h1 className="formNavH1">
            <NavLink
              to={"/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              HARD SOLUTIONS{" "}
            </NavLink>
          </h1>
        </div>

        <div class="container">
          <div class="title">Registro</div>
          <form action="#">
            <div class="user_details">
              <div class="input_pox">
                <span class="datails">Nombre</span>
                <input type="text" placeholder="Juan" required></input>
              </div>
              <div class="input_pox">
                <span class="datails">Apellido</span>
                <input type="text" placeholder="Perez" required></input>
              </div>
              <div class="input_pox">
                <span class="datails">Email</span>
                <input
                  type="text"
                  placeholder="Juanperez@hotmail.com"
                  required
                ></input>
              </div>
              <div class="input_pox">
                <span class="datails">Repetir email</span>
                <input
                  type="text"
                  placeholder="Juanperez@hotmail.com"
                  required
                ></input>
              </div>
              <div class="input_pox">
                <span class="datails">Contraseña</span>
                <input
                  type="text"
                  placeholder="Ingresa tu contraseña"
                  required
                ></input>
              </div>
              <div class="input_pox">
                <span class="datails">Repetir contraseña</span>
                <input
                  type="text"
                  placeholder="Repeti tu contraseña"
                  required
                ></input>
              </div>
            </div>
        
            <div class="button">
              <input type="submit" value="ENVIAR"></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
