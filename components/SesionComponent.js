import Image from "next/image";
import EventComponent from "@/components/EventComponent";
import { useEffect, useState } from "react";

export default function SesionComponent({ sesion, setSesion }) {
  const [user, setUser] = useState({ name: "", password: "" });
  useEffect(() => {}, []);
  const handleUser = (e, id) => {
    if (id == 1) {
      var aux = user;
      aux.name = e.target.value;
      setUser(aux);
      console.log(aux);
    }
    if (id == 2) {
      var aux = user;
      aux.password = e.target.value;
      setUser(aux);
      console.log(aux);
    }
  };
  const validUser = () => {
    if(user.name == "Luis" && user.password == "1234"){
        setSesion(true)
    }  
  }
  return (
    <div className="flex justify-center items-center mt-10">
      <div class="w-1/2 ">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => {
                handleUser(e, 1);
              }}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => {
                handleUser(e, 2);
              }}
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={()=>{
                validUser()
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
