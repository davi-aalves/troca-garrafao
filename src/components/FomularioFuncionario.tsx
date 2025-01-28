// src/components/FormularioFuncionario.tsx
import { useState, useRef, useEffect } from 'react';
import IMask from 'imask';

interface FuncionarioFormProps {
  adicionarFuncionario: (nome: string, turno: string, horario: string, data: string) => void;
}

const FormularioFuncionario: React.FC<FuncionarioFormProps> = ({ adicionarFuncionario }) => {
  const [nome, setNome] = useState('');
  const [turno, setTurno] = useState('');
  const [horario, setHorario] = useState('');
  const [data, setData] = useState('');

  const horarioRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    adicionarFuncionario(nome, turno, horario, data);
    // Limpar os campos após o envio
    setNome('');
    setTurno('');
    setHorario('');
    setData('');
  };

  useEffect(() => {
    if (horarioRef.current) {
      IMask(horarioRef.current, { mask: '00:00' });
    }
  }, []);

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-center mb-4">Adicionar Funcionário</h3>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Nome"
          className="border p-2 rounded-md w-60"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <select
          className="border p-2 rounded-md w-60"
          value={turno}
          onChange={(e) => setTurno(e.target.value)}
          required
        >
          <option value="">Selecione o turno</option>
          <option value="Diurno">Diurno</option>
          <option value="Noturno">Noturno</option>
        </select>
        <input
          ref={horarioRef}
          type="text"
          placeholder="Horário (24h)"
          className="border p-2 rounded-md w-60"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          required
        />
        <input
          type="date"
          className="border p-2 rounded-md w-60"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
        <button type="submit" className="bg-empresaRed text-white py-2 px-6 rounded-md mt-4">
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default FormularioFuncionario;
