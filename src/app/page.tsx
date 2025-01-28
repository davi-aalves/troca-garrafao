// src/app/page.tsx

'use client';

import { useState } from 'react';

export default function Home() {
  // Estado da fila de trocas
  const [fila, setFila] = useState([
    { nome: 'Maria', turno: 'Diurno', horario: '08:00', data: '2025-01-28' },
    { nome: 'João', turno: 'Noturno', horario: '20:00', data: '2025-01-28' },
  ]);

  // Função para mover um funcionário para o final da fila
  const moverParaFim = (nome: string) => {
    setFila((prevFila) => {
      const index = prevFila.findIndex((funcionario) => funcionario.nome === nome);
      if (index === -1) return prevFila; // Se não encontrar, retorna a fila sem alterações
      const novoFila = [...prevFila];
      const [moverFuncionario] = novoFila.splice(index, 1);
      novoFila.push(moverFuncionario); // Coloca o funcionário no final
      return novoFila;
    });
  };

  // Função para adicionar um novo funcionário
  const adicionarFuncionario = (nome: string, turno: string, horario: string, data: string) => {
    const novoFuncionario = { nome, turno, horario, data };
    setFila((prevFila) => [...prevFila, novoFuncionario]);
  };

  // Função para remover um funcionário da fila
  const removerFuncionario = (nome: string) => {
    setFila((prevFila) => prevFila.filter((funcionario) => funcionario.nome !== nome));
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Fila de Troca de Garrafão</h2>
      
      {/* Formulário para adicionar novo funcionário */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-center mb-4">Adicionar Funcionário</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const nome = (e.target.nome as HTMLInputElement).value;
            const turno = (e.target.turno as HTMLInputElement).value;
            const horario = (e.target.horario as HTMLInputElement).value;
            const data = (e.target.data as HTMLInputElement).value;
            adicionarFuncionario(nome, turno, horario, data);
          }}
          className="flex flex-col items-center gap-4"
        >
          <input name="nome" type="text" placeholder="Nome" className="border p-2 rounded-md w-60" required />
          <input name="turno" type="text" placeholder="Turno" className="border p-2 rounded-md w-60" required />
          <input name="horario" type="text" placeholder="Horário" className="border p-2 rounded-md w-60" required />
          <input name="data" type="date" className="border p-2 rounded-md w-60" required />
          <button type="submit" className="bg-empresaRed text-white py-2 px-6 rounded-md mt-4">Adicionar</button>
        </form>
      </div>

      {/* Lista de Funcionários */}
      <ul className="space-y-6">
        {fila.map((funcionario, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{funcionario.nome}</h3>
                <p className="text-gray-600">{funcionario.turno} - {funcionario.horario} - {funcionario.data}</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => moverParaFim(funcionario.nome)}
                  className="bg-empresaRed text-white px-6 py-2 rounded-lg hover:bg-empresaRed/80 transition-all duration-200"
                >
                  Mover para o fim
                </button>
                <button
                  onClick={() => removerFuncionario(funcionario.nome)}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all duration-200"
                >
                  Remover
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
