import { useState } from "react";
import TodoList from "./page/TodoList";
import SimpleForm from "./page/Form";
import LocalStorageExample from "./page/hookTest";

const App = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleButtonClick = (questionNumber) => {
    setSelectedQuestion(questionNumber);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => handleButtonClick(1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Soal 1
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Soal 2
        </button>
        <button
          onClick={() => handleButtonClick(3)}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
        >
          Soal 3
        </button>
      </div>
      <div className="w-full max-w-md">
        {selectedQuestion === 1 && <TodoList />}
        {selectedQuestion === 2 && <SimpleForm />}
        {selectedQuestion === 3 && <LocalStorageExample />}
      </div>
    </div>
  );
};

export default App;
