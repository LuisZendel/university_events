import Link from "next/link";
export default function Navbar() {
  return (
    <div className="z-10 flex bg-gradient-to-r from-sky-800 to-indigo-800 dark:bg-pink-200 items-center p-4 shadow-lg text-xl fixed w-screen">
      <div className="flex text-white ">
        <Link href={"/"}>Eventos</Link>
      </div>
      <div className="w-full flex text-white text-xs">
        <Link className="ml-auto mr-3"
        href={"/addevent"}>Configurar </Link>
      </div>
    </div>
  );
}
