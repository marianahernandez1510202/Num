import React, { useState } from "react";
import { motion } from "framer-motion";

const ManipulateDOM = () => {
  const [elements, setElements] = useState([]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const addElement = () => {
    const newElement = {
      id: Date.now(),
      color: getRandomColor(),
    };
    setElements([...elements, newElement]);
  };

  const removeElement = (id) => {
    setElements(elements.filter((el) => el.id !== id));
  };

  const clearElements = () => {
    setElements([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="mb-6 flex flex-col items-center gap-4">
        <button
          className="px-8 py-4 text-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full shadow-lg hover:scale-110 transition-transform"
          onClick={addElement}
        >
          ➕ Agregar Elemento
        </button>
        <button
          className="px-8 py-4 text-2xl bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-110 transition-transform"
          onClick={clearElements}
        >
          ❌ Vaciar Elementos
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {elements.map((el) => (
          <motion.div
            key={el.id}
            className="w-20 h-20 flex items-center justify-center text-white font-bold text-2xl cursor-pointer shadow-lg"
            style={{ backgroundColor: el.color, borderRadius: "50%" }}
            whileTap={{ scale: 0.5, opacity: 0 }}
            onClick={() => removeElement(el.id)}
          >
            🚀
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ManipulateDOM;
