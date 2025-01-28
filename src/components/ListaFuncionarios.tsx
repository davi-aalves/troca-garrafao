
interface Funcionario {
  nome: string;
  turno: string;
  horario: string;
  data: string;
}

interface ListaFuncionariosProps {
  fila: Funcionario[];
  moverParaFim: (nome: string) => void;
  removerFuncionario: (nome: string) => void;
}

const ListaFuncionarios: React.FC<ListaFuncionariosProps> = ({ fila, moverParaFim, removerFuncionario }) => {
  return (
    <ul className="space-y-6">
      {fila.map((funcionario, index) => (
        <li
          key={index}
          className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{funcionario.nome}</h3>
              <p className="text-gray-600">
                {funcionario.turno} - {funcionario.horario} - {funcionario.data}
              </p>
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
  );
}

export default ListaFuncionarios