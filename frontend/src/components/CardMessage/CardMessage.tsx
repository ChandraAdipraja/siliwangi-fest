import { LuSend } from "react-icons/lu";
import { SiApplemusic } from "react-icons/si";

const CardMessage = () => {
  return (
    <>
      <div className="flex flex-col p-5 bg-white bg-opacity-20 gap-y-2 drop-shadow-2xl rounded-xl">
        <div className="flex flex-row gap-x-5 items-center">
          <LuSend className="text-3xl" />
          <h1 className="text-sm font-semibold ">
            To Anisa | FT | Sistem Informasi | 2024
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Kangen Banget</h1>
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">
            Hei Sekarang Kamu Lagi Ngapain? Pastinya kamu sekarang lebih bahagia
            bersamanya bukan?
          </p>
        </div>
        <div className="flex justify-between items-center gap-x-5">
          <h1 className="text-sm">Kamis, 25 Januari 2022</h1>
          <div className="flex items-center gap-x-2">
            <div className="flex flex-col">
              <SiApplemusic className="text-2xl" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm">Somebody Pleasure</h1>
              <h2 className="text-sm">Aziz Hendra</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 bg-white bg-opacity-20 gap-y-2 drop-shadow-2xl rounded-xl mb-28">
        <div className="flex flex-row gap-x-5 items-center">
          <LuSend className="text-3xl" />
          <h1 className="text-sm font-semibold ">
            To Anisa | FT | Sistem Informasi | 2024
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Kangen Banget</h1>
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">
            Hei Sekarang Kamu Lagi Ngapain? Pastinya kamu sekarang lebih bahagia
            bersamanya bukan?
          </p>
        </div>
        <div className="flex justify-between items-center gap-x-5">
          <h1 className="text-sm">Kamis, 25 Januari 2022</h1>
          <div className="flex items-center gap-x-2">
            <div className="flex flex-col">
              <SiApplemusic className="text-2xl" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm">Somebody Pleasure</h1>
              <h2 className="text-sm">Aziz Hendra</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMessage;
