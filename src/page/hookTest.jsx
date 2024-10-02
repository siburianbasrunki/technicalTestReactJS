import useLocalStorage from "../hook/useLocal";

const LocalStorageExample = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Contoh Local Storage
      </h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        placeholder="Masukkan nama"
      />
      <p className="text-center text-lg">
        Nama yang disimpan: <strong>{name}</strong>
      </p>
    </div>
  );
};

export default LocalStorageExample;
