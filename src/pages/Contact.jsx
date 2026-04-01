import React from "react";


function Contact({ datos ,eliminar, onEditar}) {





  return (
    <div id="ContainerContacto"  className="container">
    

      {datos.map((item) => (
        <div key={item.id} className="card" style={{ width: 540 }}>
          <div id="divPadre" className="row g-0">
            <div className="col-md-4">
              <img src="https://thumbs.dreamstime.com/b/foto-del-hombre-calvo-triste-joven-con-la-cabeza-afeitada-en-el-fondo-blanco-152721836.jpg"  className="img-fluid"alt="imagen" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div id="divNombre"><h5 className="card-title"> {item.name}</h5> 
                <div className="iconos" ><i className="fa-solid fa-pen "  onClick={()=>onEditar(item)}></i> 
                <i className="fa-solid fa-trash-can" onClick={()=>eliminar(item.id)}></i></div>
               
</div >
<div id="divDatos">
                <p><i className="fa-solid fa-location-pin"></i>   {item.address}</p>
                <p><i className="fa-solid fa-phone"></i>  {item.phone}</p>
                <p id="correo"><i className="fa-solid fa-envelope"></i>   {item.email}</p></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contact;