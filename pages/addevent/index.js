import Image from "next/image";
import { useEffect, useState } from "react";
import SesionComponent from "@/components/SesionComponent";

export default function AddEvent() {
  const [event, setEvent] = useState({
    nombre: "",
    fechaInicio: "",
    fechaFin: "",
    observaciones: "",
  });
  const [sesion, setSesion] = useState(true);
  useEffect(() => {}, []);
  const handleEvent = (e, id) => {
    if (id == 1) {
      var aux = event;
      aux.nombre = e.target.value;
      setEvent(aux);
    }
    if (id == 2) {
      var aux = event;
      aux.fechaInicio = e.target.value;
      setEvent(aux);
    }
    if (id == 3) {
      var aux = event;
      aux.fechaFin = e.target.value;
      setEvent(aux);
    }
    if (id == 4) {
      var aux = event;
      aux.observaciones = e.target.value;
      setEvent(aux);
    }
    console.log(event);
  };

  const validEvent = () => {
    if (
      event.nombre != "" &&
      event.fechaFin != "" &&
      event.fechaInicio != "" &&
      event.obserbacion != ""
    ) {
      fetch("http://localhost:3001/api/event/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      }).then((res) => {
        console.log(res);
        if (res.status == 200 || res.status == 201) {
          alert("El evento fue creado correctamente");
          setEvent({
            nombre: "",
            fechaInicio: "",
            fechaFin: "",
            observaciones: "",
          });
        }
      });
    } else {
      alert("Aún no se llenan todos los campos");
    }
  };
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-screen p-5">
      <div className="flex justify-center items-center text-xl text-white font-bold text-2xl">
        Eventos Universitarios
      </div>
      {sesion ? (
        <div className="flex justify-center items-center mt-10">
          <div class="w-1/2 ">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Nombre del evento
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="nombre"
                  onChange={(e) => {
                    handleEvent(e, 1);
                  }}
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Fecha inicio
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="finicio"
                  type="text"
                  placeholder="fecha inicio"
                  onChange={(e) => {
                    handleEvent(e, 2);
                  }}
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Fecha fin
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="ffin"
                  type="text"
                  placeholder="fecha fin"
                  onChange={(e) => {
                    handleEvent(e, 3);
                  }}
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Observaciones / descripcion
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="descripcion"
                  onChange={(e) => {
                    handleEvent(e, 4);
                  }}
                />
              </div>

              <div class="flex items-center justify-between">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => {
                    validEvent();
                  }}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <SesionComponent sesion={sesion} setSesion={setSesion} />
      )}
    </div>
  );
}
