import { FaArrowRight } from "react-icons/fa";
import { PiEyeSlashLight } from "react-icons/pi";
import CardMessage from "../../../components/CardMessage/CardMessage";
import { FiSearch } from "react-icons/fi";

export const HeadContent = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-y-14">
        <div className="flex flex-col justify-center text-5xl px-10 gap-y-5 my-14">
          <h1 className="text-center font-semibold italic text-white">
            Siapa Yang Mengirimi Message Ini?
          </h1>
          <div className=" bg-secondary bg-opacity-50 rounded-full flex justify-center gap-x-7 py-2 items-center backdrop:blur-lg">
            <button className="text-lg text-white font-semibold">
              Keluarkan Pikiranmu
            </button>
            <FaArrowRight className="text-xl text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col items-center ">
            <div className="p-4 bg-white bg-opacity-20 drop-shadow-2xl rounded-lg">
              <PiEyeSlashLight className="text-4xl text-white" />
              <h1 className="text-2xl font-semibold text-white">
                Anonimus Message
              </h1>
              <p className="text-md text-gray-400">
                Mereka Tidak Tahu Kalau Kamu Yang Mengirim Pesan
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-white">
            <div className="p-4 bg-white bg-opacity-20 drop-shadow-2xl rounded-lg">
              <FiSearch className="text-4xl" />
              <h1 className="text-2xl font-semibold ">Cari Nama Kamu</h1>
              <p className="text-md text-gray-400">
                Mungkinkah ada seseorang yang mengirimi pesan atas nama kamu?
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <CardMessage />
        </div>
      </div>
    </>
  );
};
