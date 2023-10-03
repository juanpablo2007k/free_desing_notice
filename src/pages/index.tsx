import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={"contenido1"}>
      <div className="flex flex-wrap">
        <div className="w-100">
          <div className="mt-5 text-center ">
            <h1 style={{ fontSize: "80px" }}>
              Bienvenido a free{" "}
              <span id="diseñito" className=" font-bold">
                <span className="fade-in-out">notice</span>{" "}
                <span className="fade-in-out">design</span>
              </span>
            </h1>
            <button className="text-black font-bold bg-yellow-500 rounded-full p-2 mt-3">
              see more projects
            </button>
          </div>
          <div className="justify-between space-x-15 flex flex-wrap m-20">
            <div className="flex items-center">
              {" "}
              {/* Nuevo contenedor para el texto y la imagen */}
              <div className="mt-10 text-left">
                {" "}
                {/* Muevo las clases de texto aquí */}
                <h2 className="font-bold text-3xl mb-2">Papers in fisr list</h2>
                <p className="text-yellow-500 font-bold text-xl">
                  Just like the algorithms in its devices, HTC has designed its
                  own emoji set.
                </p>
                <ul className="text-left mt-5">
                  <li>
                    <button className="m-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        color="green"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-all"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                      </svg>
                    </button>
                    HTC emojis are although unique from others but have very
                    limited numbers.
                  </li>
                  <li>
                    <button className="m-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        color="green"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-all"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                      </svg>
                    </button>
                    HTC emojis are although unique from others but have very
                    limited numbers.
                  </li>
                  <li>
                    <button className="m-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        color="green"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-all"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                      </svg>
                    </button>
                    HTC emojis are although unique from others but have very
                    limited numbers.
                  </li>
                </ul>
              </div>
              <div>
                <img
                  className="mr-10"
                  width={270}
                  src="https://cdn-icons-png.flaticon.com/512/4105/4105448.png"
                  alt="x"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
