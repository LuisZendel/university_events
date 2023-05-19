import Image from "next/image";
import EventComponent from "@/components/EventComponent";

export default function Home() {
  return (
    <div className="bg-white h-screen p-5">
      <div className="flex justify-center items-center text-xl">
        Eventos Universitarios
      </div>
      <div className="grid grid-cols-2 md:gap-2 gap-4 md:gird-cols-4 ">
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
