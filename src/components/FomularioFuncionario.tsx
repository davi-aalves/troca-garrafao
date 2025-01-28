import React, { useState } from 'react';

interface FormularioFuncionarioProps {
  adicionarFuncionario: (nome: string, turno: string, horario: string, data: string) => void;
}

const FormularioFuncionario: React.FC<FormularioFuncionarioProps> = ({ adicionarFuncionario }) => {
  const [nome, setNome] = useState('');
  const [turno, setTurno] = useState('');
  const [horario, setHorario] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    adicionarFuncionario(nome, turno, horario, data);
    setNome('');
    setTurno('');
    setHorario('');
    setData('');
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-center mb-4">Adicionar Funcionário</h3>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Nome"
          className="border p-2 rounded-md w-full sm:w-60"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        
        <select
          value={turno}
          onChange={(e) => setTurno(e.target.value)}
          className="border p-2 rounded-md w-full sm:w-60"
          required
        >
          <option value="">Selecione o turno</option>
          <option value="Diurno">Diurno</option>
          <option value="Noturno">Noturno</option>
        </select>

        <input
          type="text"
          placeholder="Horário (24h)"
          className="border p-2 rounded-md w-full sm:w-60"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          required
        />

        <input
          type="date"
          className="border p-2 rounded-md w-full sm:w-60"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-empresaRed text-white py-2 px-6 rounded-md mt-4 w-full sm:w-auto"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default FormularioFuncionario;
