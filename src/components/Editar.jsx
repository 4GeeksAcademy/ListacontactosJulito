import React, { useState, useEffect } from "react";

function Editar({ contacto, cerrarEdicion, cargarContactos }) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");

  useEffect(() => {
    if (contacto) {
      setNombre(contacto.name);
      setCorreo(contacto.email);
      setTelefono(contacto.phone);
      setDireccion(contacto.address);
    }
  }, [contacto]);

  async function guardarCambios() {
    try{ 
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/julito/contacts${contacto.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nombre,
        phone: telefono,
        email: correo,
        address: direccion
      }) })

      let data =  await response.json()
      console.log(data.status);
        if (!response.ok) {
          throw new Error("no se actualizo el contacto");
        }
        else {
        
        alert("contacto actualizado")
        cargarContactos()
        cerrarEdicion()
        }
      }
    
      catch(error) {
        console.log(error)

      }
  }

  return (
 
  <div id="modalFondo" className="modal fade show d-block" tabIndex="-1">
    <div className="modal-dialog">
      <div  id="modal"  className="modal-content">

        <div className="modal-header">
          <h5 className="modal-title">Editar contacto</h5>
          <button type="button" id="botones" className="btn-close" onClick={cerrarEdicion}></button>
 </div>

        <div className="modal-body">
          <form onSubmit={(e) => e.preventDefault()}>

            <div className="mb-3">
              <label className="form-label">Nombre completo</label>
              <input
                type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input  type="email" className="form-control" onChange={(e) => setCorreo(e.target.value)} value={correo} />
            </div>

            <div className="mb-3">
              <label className="form-label">Telefono</label>
              <input type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Direccion</label>
              <input type="text" className="form-control" onChange={(e) => setDireccion(e.target.value)} value={direccion} />
            </div>

          </form>
        </div>

        <div className="modal-footer">
          <button type="button" id="botones" className="btn btn-secondary" onClick={cerrarEdicion}>
            Cerrar
          </button>

          <button type="button"  id="botones" className="btn btn-primary" onClick={guardarCambios} >
            Guardar Cambios
          </button>
        </div>

      </div>
    </div>
  </div>


  

  );
}

export default Editar;