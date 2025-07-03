import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/auth/register', form);
      alert('Usuario registrado con éxito');
      navigate('/login');
    } catch (err) {
      alert('Error en el registro');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900">
      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-90 p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-5"
      >
        <h2 className="text-3xl font-bold text-white mb-2">
          <span className="text-white">Crea tu </span>
          <span className="text-blue-500">cuenta</span>
        </h2>
        <input
          type="text"
          placeholder="Usuario"
          onChange={e => setForm({ ...form, username: e.target.value })}
          className="border border-gray-700 bg-gray-900 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={e => setForm({ ...form, password: e.target.value })}
          className="border border-gray-700 bg-gray-900 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded py-2 font-semibold hover:bg-blue-700 transition"
        >
          Registrarse
        </button>
        <button
          type="button"
          onClick={() => navigate('/login')}
          className="text-blue-400 hover:underline text-sm mt-2"
        >
          ¿Ya tienes cuenta? Inicia sesión
        </button>
      </form>
    </div>
  );
}