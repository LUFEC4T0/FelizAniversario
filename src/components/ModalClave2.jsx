import React, { useState } from 'react';

const ModalClave2 = ({ onClose, onClaveCorrecta }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (inputValue.toLowerCase() === 'bailongo') {
      onClaveCorrecta();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-5 md:px-0">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-1">Pero antes tienes que responderme una pregunta</h2>
        <p className="mb-6">Cual fue el primer rio al que fuimos juntos?</p>
        <input
          type="text"
          className="border p-2 mb-4 w-full"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {error && <p className="text-red-500 mb-4">Respuesta incorrecta, ya casi!!.</p>}
        <div className="flex justify-between">
          <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
            Cancelar
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalClave2;