const CreateMessage = () => {
  return (
    <>
      <div className="flex flex-col ital my-8 italic text-4xl font-semibold text-center">
        <h1 className="text-white">Create Message</h1>
      </div>
      <form className="flex flex-col p-5 bg-white bg-opacity-20 gap-y-2 drop-shadow-2xl rounded-xl mb-28">
        <div className="mb-5">
          <label className=" text-white block mb-2 text-sm font-medium dark:text-white">
            Nama Penerima
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Chandra"
            required
          />
        </div>
        <div className="mb-5">
          <label className=" text-white block mb-2 text-sm font-medium dark:text-white">
            Judul Pesan
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Kangen Banget"
            required
          />
        </div>
        <div className="mb-5">
          <label className=" text-white block mb-2 text-sm font-medium dark:text-white">
            Jurusan Penerima
          </label>
          <select
            id="jurusan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          >
            <option value="FT">FT</option>
            <option value="SI">SI</option>
          </select>
        </div>
        <div className="mb-5">
          <label className=" text-white block mb-2 text-sm font-medium dark:text-white">
            Tahun Angkatan Penerima
          </label>
          <select
            id="angkatan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div className="mb-5">
          <label className=" text-white block mb-2 text-sm font-medium dark:text-white">
            Isi Pesan
          </label>
          <textarea
            rows={5}
            id="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Hei Sekarang Kamu Lagi Ngapain? Pastinya kamu sekarang lebih bahagia bersamanya bukan?"
            required
          ></textarea>
        </div>
        <div className="mb-5">
          <label className=" text-white block mb-2 text-sm font-medium dark:text-white">
            Pilih Lagu
          </label>
          <input
            type="search"
            id="lagu"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className=" bg-transparent outline bg-opacity-50 rounded-lg flex justify-center gap-x-7 py-2 items-center backdrop:blur-lg">
          <button className="text-lg text-white font-semibold">Submit</button>
        </div>
      </form>
    </>
  );
};

export default CreateMessage;
