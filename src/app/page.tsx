// src/app/page.tsx
'use client'

import { useState } from 'react';
import FormularioFuncionario from '../components/FomularioFuncionario';
import ListaFuncionarios from '../components/ListaFuncionarios';

interface Funcionario {
  nome: string;
  turno: string;
  horario: string;
  data: string;
}

export default function Home() {
  const [fila, setFila] = useState<Funcionario[]>([
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

  const adicionarFuncionario = (nome: string, turno: string, horario: string, data: string) => {
    const novoFuncionario = { nome, turno, horario, data };
    setFila((prevFila) => [...prevFila, novoFuncionario]);
  };

  const removerFuncionario = (nome: string) => {
    setFila((prevFila) => prevFila.filter((funcionario) => funcionario.nome !== nome));
  };

  return (
    <div className="container mx-auto p-8">
      <FormularioFuncionario adicionarFuncionario={adicionarFuncionario} />
      <ListaFuncionarios
        fila={fila}
        moverParaFim={moverParaFim}
        removerFuncionario={removerFuncionario}
      />
    </div>
  );
}
