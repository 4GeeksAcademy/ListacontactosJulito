import { Link } from "react-router-dom";
import React, {useState} from "react";

export const Form = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    const crearUsuario = (nombre, telefono, correo, direccion) =>{
        fetch('https://playground.4geeks.com/contact/agendas/alexis12/contacts', {method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nombre,
        phone: telefono,
        email: correo,
        address: direccion
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Creado:", data);
      })
      .catch((error) => console.log(error));
  };

  const handleClick = (e) =>{
    crearUsuario(name, phone, email, address);
    setName("");
    setPhone("");
    setEmail("");
    setAddress("")

}

    return (
        <div className="container-row text-center mt-5">
            <form style={{width: 600}}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" className="form-control" onChange={(e)=>{setName(e.target.value)}} value={name} id="exampleInputEmail1" aria-describedby="emailHelp"/>

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">phone</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setPhone(e.target.value)}} value={phone} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}} value={email}  />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Adress</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setAddress(e.target.value)}} value={address} />
                </div>
                    <button type="button" className="btn btn-primary" onClick={handleClick}>Mandame</button>
                <Link to="/">
                    <p>Volver al Home</p>
                </Link>
            </form>
        </div>
    );
};