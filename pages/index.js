import Image from "next/image";
import EventComponent from "@/components/EventComponent";
import { useEffect, useState } from "react";

export default function Home() {
  const [event, setEvent] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3001/api/event/data")
    .then(data => data.json())
    .then(event=> setEvent(event) )
  },[])
  return (
    <div className="bg-white h-screen p-5">
      <div className="flex justify-center items-center text-xl">
        Eventos Universitarios
      </div>
      <div className="grid grid-cols-2 sm:gap-2 gap-4 sm:grid-cols-4 ">
        {event.map((e,index) => {
          return(
            <EventComponent
            nombre={e.nombre}
            fecha={e.fechaInicio}
            descripcion={e.observaciones}
            key={e.id}
          />
          )
        })}
        <EventComponent
          nombre={"Nuevo"}
          fecha={"14/05/2023"}
          descripcion={"Evento de la orquesta "}
        />
        <EventComponent
          nombre={"Nuevo"}
          fecha={"14/05/2023"}
          descripcion={"Evento de la orquesta "}
        />
        <EventComponent
          nombre={"Nuevo"}
          fecha={"14/05/2023"}
          descripcion={"Evento de la orquesta "}
        />
        <EventComponent
          nombre={"Nuevo"}
          fecha={"14/05/2023"}
          descripcion={"Evento de la orquesta "}
        />
      </div>
    </div>
  );
}
