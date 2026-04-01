
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import Contact from "./Contact.jsx";
import Editar from "../components/Editar.jsx";


export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [datos, setDatos] = useState([]);
  const [contactoEditar, setContactoEditar] = useState(null)

  async function crearAgenda() {
    try {
      let response = await fetch("https://playground.4geeks.com/contact/agendas/julito", {
        method: "POST"
      })
      console.log(response);
      let data = await response.json()
      console.log(data)
      
      return console.log("informacion recibida", data)
    }
 
    catch (error) {
      return console.log(error)
    }

  }

async function informacion  () {
  try{ let response= await fetch("https://playground.4geeks.com/contact/agendas/julito/contacts", {
      method: "GET"
    })
      let data = await response.json ()
        if (!response.ok) {
        crearAgenda()}
        return setDatos(data.contacts) }

      catch(error){ return console.log(error)

      };
      }
  

  const eliminar = (id) => {
    fetch(`https://playground.4geeks.com/contact/agendas/julito/contacts/${id}`, {
      method: "DELETE",
    })
      .then(() => informacion())
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    informacion();
  }, []);

  return (

    <div className="text-center mt-5">
      {contactoEditar ? (<Editar contacto={contactoEditar} cerrarEdicion={() => setContactoEditar(null)} cargarContactos={informacion} />) : (<Contact datos={datos} eliminar={eliminar} onEditar={setContactoEditar} />
      )}

    </div>
  );
};