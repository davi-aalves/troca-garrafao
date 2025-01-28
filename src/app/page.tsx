'use client';

import { useState } from 'react';

export default function Home() {
  const [fila, setFila] = useState([
    { nome: 'Maria', turno: 'Diurno', horario: '08:00', data: '2025-01-28' },
    { nome: 'João', turno: 'Noturno', horario: '20:00', data: '2025-01-28' },
  ]);

  const moverParaFim = (nome: string) => {
    setFila((prevFila) => {
      const index = prevFila.findIndex((funcionario) => funcionario.nome === nome);
      if (index === -1) return prevFila;
      const novoFila = [...prevFila];
      const [moverFuncionario] = novoFila.splice(index, 1);
      novoFila.push(moverFuncionario);
      return novoFila;
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Fila de Troca de Garrafão</h2>
      <ul className="space-y-6">
        {fila.map((funcionario, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{funcionario.nome}</h3>
                <p className="text-gray-600">{funcionario.turno} - {funcionario.horario} - {funcionario.data}</p>
              </div>
              <button
                onClick={() => moverParaFim(funcionario.nome)}
                className="bg-empresaRed text-white px-6 py-2 rounded-lg hover:bg-empresaRed/80 transition-all duration-200"
              >
                Mover para o fim
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}