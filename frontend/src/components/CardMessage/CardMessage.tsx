import { LuSend } from "react-icons/lu";
import { SiApplemusic } from "react-icons/si";

const CardMessage = () => {
  return (
    <>
      <div className="flex flex-col p-5 bg-white bg-opacity-20 gap-y-2 drop-shadow-2xl rounded-xl">
        <div className="flex flex-row gap-x-5 items-center">
          <LuSend className="text-3xl text-white" />
          <h1 className="text-sm font-semibold text-white">
            To Anisa | FT | Sistem Informasi | 2024
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-white">Kangen Banget</h1>
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">
            Hei Sekarang Kamu Lagi Ngapain? Pastinya kamu sekarang lebih bahagia
            bersamanya bukan?
          </p>
        </div>
        <div className="flex justify-between items-center gap-x-5">
          <h1 className="text-sm text-white">Kamis, 25 Januari 2022</h1>
          <div className="flex items-center gap-x-2">
            <div className="flex flex-col">
              <SiApplemusic className="text-2xl text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold text-white">
                Somebody Pleasure
              </h1>
              <h2 className="text-sm text-white">Aziz Hendra</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 bg-white bg-opacity-20 gap-y-2 drop-shadow-2xl rounded-xl mb-28">
        <div className="flex flex-row gap-x-5 items-center">
          <LuSend className="text-3xl text-white" />
          <h1 className="text-sm font-semibold text-white">
            To Anisa | FT | Sistem Informasi | 2024
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-white">Kangen Banget</h1>
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">
            Hei Sekarang Kamu Lagi Ngapain? Pastinya kamu sekarang lebih bahagia
            bersamanya bukan?
          </p>
        </div>
        <div className="flex justify-between items-center gap-x-5">
          <h1 className="text-sm text-white">Kamis, 25 Januari 2022</h1>
          <div className="flex items-center gap-x-2">
            <div className="flex flex-col">
              <SiApplemusic className="text-2xl text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm text-white font-semibold">
                Somebody Pleasure
              </h1>
              <h2 className="text-sm text-white">Aziz Hendra</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMessage;
