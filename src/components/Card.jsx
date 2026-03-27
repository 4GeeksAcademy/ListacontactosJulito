import React, {useState} from "react";
import EditForm from "./EditForm";

export const Card = ({datos, eliminar, actualizar}) => {

  const [itemAEditar, setItemAEditar] = useState(null);

    return (
        <div className="container-row text-center mt-5">
            {itemAEditar && (
                <div className="modal-overlay">
                <EditForm
                    datos={itemAEditar}
                    onClose={() => setItemAEditar(null)}
                    actualizar={actualizar}
                />
                </div>
            )}
            <ul className="row justify-content-center">
                {datos.map((item)=>(
                    <li className="col-md-4 mb-4 d-flex justify-content-center" key={item.id}>
                        <div className="card" style={{width: 200}} >
                        <img src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp11496091.jpg&f=1&nofb=1&ipt=8d9343a52e3690e39f0c5832e4e7387e19360d88d4aa1af22910439591bb1858'} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.phone}</p>
                            <p className="card-text">{item.email}</p>
                            <p className="card-text">{item.address}</p>
                            <button type="button" className="btn btn-primary" onClick={()=>eliminar(item.id)}>Borrame</button>

                            <button type="button" className="btn btn-primary" onClick={()=>setItemAEditar(item)}>Editar</button>
                        </div>
                    </div>
                </li>
                ))}
            </ul>

       </div>
    );
};