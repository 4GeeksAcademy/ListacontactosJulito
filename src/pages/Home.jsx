import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";
import { useEffect, useState } from "react";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();
	const [datos, setDatos] = useState([]);

	const agendaNueva = () => {
		return fetch("https://playground.4geeks.com/contact/agendas/julito", {
			method: "POST",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Agenda creada:", data);
				return data;
			});
	};

	const contcto = () => {
		fetch("https://playground.4geeks.com/contact/agendas/julito/contacts")
			.then((res) => {
				if (res.status === 404) {
					return agendaNueva().then(() => contcto());
				}
				return res.json();
			})
			.then((data) => {
				if (data) setDatos(data.contacts);
			})
			.catch((error) => console.log(error));
	};
	useEffect(() => {
		contacto();
	}, []);

	return (
		<div className="container mt-4">
			<h1>Lista de contactos</h1>

			{datos.map((item) => (
				<Card key={item.id} datos={item} />

				
			))}
		</div>
	);
};