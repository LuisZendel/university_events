import { useEffect, useState } from "react";
import SesionComponent from "@/components/SesionComponent";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import EventComponent from "@/components/EventComponent";
export default function DeleteEvent() {
  const [event, setEvent] = useState([]);
  const [sesion, setSesion] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/event/data")
      .then((data) => data.json())
      .then((event) => setEvent(event));
  }, []);

  const borrarEvent = (id,index) => {
    fetch("http://localhost:3001/api/event/data/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"id": id}),
      }).then((res) => {
        console.log(res);
        if (res.status == 200 || res.status == 201) {
          alert("El evento fue eliminado");
        }
      });
      var aux = [...event]
      aux.splice(index,1)
      setEvent(aux)
  }
  return (
    <div className=" h-screen bg-white">
      <Navbar />
      <div className="flex justify-center items-center text-xl text-2xl p-20">
        Eventos Universitarios
      </div>
      {sesion ? (
        <div className="flex w-full mt-10">
          <div className="p-10 border border-2 mx-2 w-80 flex-col ">
            <span className="flex justify-center items-cener"> OPCIONES</span>
            <Link
              class="bg-sky-800  hover:bg-sky-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block my-2 w-48 mx-auto"
              href={"/addevent"}
            >
              Crear evento
            </Link>
            <Link
              class="bg-sky-800  hover:bg-sky-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block my-2 w-48 mx-auto"
              href={""}
            >
              Eliminar evento
            </Link>
            <Link
              class="bg-sky-800  hover:bg-sky-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block my-2 w-48 mx-auto"
              href={"/"}
            >
              Actualizar evento
            </Link>
          </div>
          <div class="w-1/2 mx-auto grid-grid-cols-2 h-96 overflow-scroll">
            {event.map((e, index) => {
              return (
                <div key={e.id}>
                    <button className="w-32 bg-red-400 p-2 rounded-md"
                    onClick={()=>{borrarEvent(e.idEvento, index)}}>Eliminar {e.idEvento}</button>
                  <EventComponent
                    nombre={e.nombre}
                    fecha={e.fechaInicio}
                    descripcion={e.observaciones}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <SesionComponent sesion={sesion} setSesion={setSesion} />
      )}
    </div>
  );
}
