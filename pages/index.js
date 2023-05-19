import Image from "next/image";
import EventComponent from "@/components/EventComponent";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/event/data")
      .then((data) => data.json())
      .then((event) => setEvent(event));
  }, []);
  return (
    <div className="bg-white ">
      <Navbar />
      <div className="py-20">
        <div className="p-10">
          <div className="flex justify-center items-center text-xl  bg-[url('../public/fondo.jpeg')] sm:mx-32 h-96 ">
            <span className="bg-zinc-50 opacity-75 rounded-md w-64 flex justify-center h-10 items-center">
              {" "}
              Eventos Universitarios
            </span>
          </div>
        </div>
        <div className=" w-full p-10 sm:grid grid-cols-2 gap-4 block">
          <Image src={"/evento1.jpeg"} height={700} width={700} />
          <div className="">
            <div className="flex justify-center items-center text-xl">
              Eventos
            </div>
            <div className="mx-2">
              Bienvenido/a a nuestra página web, dedicada a proporcionarte
              información actualizada sobre los emocionantes eventos que se
              llevan a cabo en nuestra prestigiosa institución universitaria.
              Aquí encontrarás un completo y detallado listado de todas las
              actividades y acontecimientos que tienen lugar en nuestro campus,
              diseñados para enriquecer la experiencia académica y brindar
              oportunidades de aprendizaje únicas a nuestros estudiantes y
              miembros de la comunidad.
            </div>
          </div>
        </div>
        <div className=" w-full py-1 px-10 sm:p-10 sm:grid grid-cols-2 gap-4 block">
          <div className="">
            <div className="mx-2 hidden md:block">
              Navegar por nuestra página web es sencillo e intuitivo.
              Encontrarás un calendario interactivo que te permitirá explorar
              los eventos programados para cada día, semana o mes. Además, cada
              evento cuenta con una descripción detallada que incluye la fecha,
              hora, ubicación y cualquier información adicional relevante.
              También encontrarás enlaces para registrarte o comprar entradas,
              en caso de que sea necesario. Ya seas estudiante, profesor,
              personal de la universidad o simplemente un entusiasta de la
              educación y la cultura, te invitamos a explorar nuestro listado de
              eventos y descubrir las emocionantes oportunidades que nuestra
              institución tiene para ofrecer. Te garantizamos que encontrarás
              algo que llamará tu atención y despertará tu curiosidad.
            </div>
            <div className="mx-2 ">
              Mantente al día visitando regularmente nuestra página web, ya que
              actualizamos constantemente el listado de eventos para asegurarnos
              de que no te pierdas ninguna de las actividades enriquecedoras que
              se llevan a cabo en nuestra institución universitaria. Aprovecha
              esta oportunidad para ampliar tus conocimientos, conectar con
              expertos en diferentes campos y sumergirte en un entorno de
              aprendizaje vibrante y estimulante.
            </div>
          </div>
          <Image src={"/evento2.jpeg"} height={700} width={700} />
        </div>
        <div className="flex justify-center items-center text-xl">
          Eventos en puerta
        </div>
        <div className="grid grid-cols-2 sm:gap-2 gap-4 sm:grid-cols-4 ">
          {event.map((e, index) => {
            return (
              <EventComponent
                nombre={e.nombre}
                fecha={e.fechaInicio}
                descripcion={e.observaciones}
                key={e.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
