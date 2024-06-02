import React, { useEffect, useState } from "react";
import Radarmap from "./Radarmap";
import { useAuth } from "../context/Authcontext";

function Dashboard() {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [Data, setData] = useState({});
  const { logout, userId } = useAuth();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendUrl}/user/${userId}`);
        const data = await response.json();
        setData(data["employee"]);
      } catch (error) {
        console.error("Error fetching the user:", error);
      }
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await fetch(
          `https://randomuser.me/api/?gender=${JSON.stringify(Data["gender"])
            .toLowerCase()
            .replace(/['"]+/g, "")}`
        );
        const data = await response.json();
        setAvatarUrl(data.results[0].picture.large);
      } catch (error) {
        console.error("Error fetching the avatar:", error);
      }
    };
    if (Object.keys(Data).length !== 0) {
      fetchAvatar();
    }
  }, [Data]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="bg-gray-900 text-white w-full md:w-1/4 p-6">
        <div className="flex flex-col items-center">
          <img src="./fact-wh.png" className="h-16 my-4" alt="Factored" />
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt="Avatar"
              className="h-24 w-24 rounded-full mb-4"
            />
          )}
          <div className="text-xl font-semibold mb-2">{Data["name"]}</div>
          <div className="text-sm mb-6">{Data["department"]}</div>

          <div className="w-full border-t border-gray-700 my-4"></div>
          <div className="text-sm mb-2">
            <span className="font-semibold">Contacto:</span> {Data["email"]}
          </div>
          <div className="text-sm mb-2">
            <span className="font-semibold">Ubicación:</span> Medellin
          </div>
          <div className="text-sm mb-2">
            <span className="font-semibold">Fecha de ingreso:</span> 2021-10-01
          </div>
        </div>
        <button
          onClick={logout}
          className="inline-flex items-center px-4 py-2 rounded-md text-base font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Logout
        </button>
      </div>

      <div className="w-full md:w-3/4 p-6 bg-white">
        {/* inicio de dash */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {"Skills of " + Data["name"]}
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                {/* agrega aca una lista con las skills */}
                {Array.isArray(Data["skills"]) && Data["skills"].length > 0 ? (
                  <ul className="list-disc list-inside">
                    {Data["skills"].map((skill, index) => (
                      <li key={index}>
                        {skill.name} - {skill.porcentage}%
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No hay datos de habilidades disponibles</p>
                )}
              </div>
              <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
                <Radarmap skills={Data["skills"]} />
              </div>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;
