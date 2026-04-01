import {React,useState} from "react";
import { Link,useNavigate } from "react-router-dom";

function AddContact() {

const navigate = useNavigate();
const[nombre, setNombre]=useState("")
const[telefono, setTelefono]=useState("")
const[direccion, setDireccion]=useState("")
const[correo, setCorreo]=useState("")

  const crearUsuario = () => {
    fetch("https://playground.4geeks.com/contact/agendas/julito/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nombre,
        phone: telefono,
        email: correo,
        address: direccion
      })
    })
      .then((data) => {
        console.log("Creado:", data);
        navigate("/")
      })
      .catch((error) => console.log(error));
  };







  return (
    <div id="formulario">
    <form className="container mt-4" style={{ width: 500 }}>
        <div className="mb-3">
        <label  className="form-label">Nombre completo</label>
        <input type="text" className="form-control" id="nombreCompleto" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
      </div>
      <div className="mb-3">
        <label htmlFor="email1" className="form-label">Email</label>
        <input type="email" className="form-control" id="email1" aria-describedby="emailHelp1" onChange={(e)=>setCorreo(e.target.value)} value={correo}/>
        
      </div>

      

      <div className="mb-3">
        <label  className="form-label">Telefono</label>
        <input type="text" className="form-control" id="telefono" aria-describedby="emailHelp2" onChange={(e)=>setTelefono(e.target.value)} value={telefono}/>
        
      </div>

      <div className="mb-3">
        <label className="form-label">Direccion</label>
        <input type="text" className="form-control" id="password2"  onChange={(e)=>setDireccion(e.target.value)} value={direccion}/>
      </div>
   <button type="button" id="botones" className="btn btn-primary" onClick={crearUsuario}>Guardar</button>
       <Link to="/">	
	<p className="card-text"><small className="text-muted">Volver a contactos</small></p>
      </Link>
    </form>
  
    </div>
  );
}

export default AddContact;