import Image from "next/image";

const EventComponent = ({ nombre, fecha, descripcion }) => {
  return (
    <div className="p-4 justify-center items-center w-full my-3 mx-auto rounded rounded-md broder-px border shadow-lg shadow-blue-200/40 bg-white">
      <div className="flex justify-center"></div>
      <div className="flex justify-center content-center">
        <p className="">{nombre}</p>
      </div>
      <div className="flex justify-center font-semibold">
        <p>{fecha}</p>
      </div>
      <div className="flex justify-center content-center text-xs">
        <p className="">{descripcion}</p>
      </div>
      <div className="justify-center content-center mt-1 flex">
        <button
          className="mx-2 bg-blue-100 px-3 h-7 justify-center content-center rounded-md flex w-max"
          onClick={() => {}}
        >
          Consultar
        </button>
      </div>
    </div>
  );
};

export default EventComponent;
