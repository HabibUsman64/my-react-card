import React from "react";

const Card: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
      <h2 className="text-xl font-bold mb-2">Dev Habib Card</h2>
      <p className="text-gray-600 mb-4">
        I am a passionate React Developer with a strong background in building scalable and robust web applications from database to UI using React, Node.js, and PostgreSQL. Focused on crafting scalable user experiences that suits the needs of your business.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Connect with Habib
      </button>
    </div>
  );
};

export default Card;
