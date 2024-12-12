import { useState } from "react";
import { Button } from "../../../components/ui/Button";
import { GiLoveLetter } from "react-icons/gi";
import { jurusan, angkatan } from ".";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateMessage = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [anonymous, setAnonymous] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const saveMessage = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/messages", {
        senderName,
        recipientName,
        major,
        year,
        title,
        message,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const checkedAnonymous = () => {
    setAnonymous(!anonymous);
    setSenderName("");
  };

  const showForm = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="flex flex-col mt-52 m-0 p-0 justify-center items-center gap-y-3">
        <div className="text-3xl font-semibold">
          <h1>Create Message</h1>
        </div>
        <div className="flex justify-center items-center gap-x-4">
          <Button
            className="bg-secondary text-black text-xl font-semibold flex items-center justify-center hover:bg-active"
            onClick={showForm}
          >
            Create
            <GiLoveLetter className="text-primary" />
          </Button>
        </div>
      </div>
      {show && (
        <form
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-2"
          onSubmit={saveMessage}
        >
          <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b">
              <h2 className="text-xl font-bold text-gray-800">Buat Pesan</h2>
              <p className="text-sm text-gray-600">
                Isi semua informasi yang diperlukan.
              </p>
            </div>

            {/* Scrollable Content */}
            <div className="p-4 max-h-[70vh] overflow-y-auto">
              {/* Section 1: Informasi Pribadi */}
              <div className="">
                <div className="">
                  <div className="flex justify-between items-center align-middle">
                    <div className="block mb-2 text-sm font-medium text-gray-700">
                      {!anonymous ? (
                        "Nama Pengirim"
                      ) : (
                        <span className="invisible">Placeholder</span>
                      )}
                    </div>
                    <div className="flex justify-end items-end">
                      <input
                        type="checkbox"
                        checked={anonymous}
                        onClick={checkedAnonymous}
                      />
                      <label className="ml-2 text-sm font-medium text-gray-700">
                        Anonim
                      </label>
                    </div>
                  </div>
                  {!anonymous && (
                    <input
                      type="text"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 mb-4"
                      placeholder="Masukkan nama lengkap"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                    />
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Nama Penerima
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 mb-4"
                    placeholder="Masukkan nama lengkap"
                    required
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                  />
                </div>
              </div>

              {/* Section 2: Kontak */}
              <div className="mb-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Jurusan
                  </label>
                  <select
                    id="jurusan"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 mb-4"
                    required
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                  >
                    <option value="" disabled>
                      -- Pilih Jurusan --
                    </option>
                    {jurusan.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Angkatan Penerima
                  </label>
                  <select
                    id="angkatan"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                    required
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="" disabled>
                      -- Pilih Angkatan --
                    </option>
                    {angkatan.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Section 3: Alamat */}
              <div className="">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Judul Pesan
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 mb-4"
                    placeholder="Masukkan Judul"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Isi Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 "
                    placeholder="Masukkan isi pesan"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="p-4 border-t flex justify-end bg-gray-50">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 mr-2"
                onClick={showForm}
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Kirim
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default CreateMessage;
