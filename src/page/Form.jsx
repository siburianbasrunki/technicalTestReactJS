import { useState } from "react";
import Swal from "sweetalert2";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email) {
      setError("Both fields are required");
      return;
    }

    Swal.fire({
      title: "Success!",
      html: `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}
      `,
      icon: "success",
      confirmButtonText: "OK",
    });

    setName("");
    setEmail("");
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Simple Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
