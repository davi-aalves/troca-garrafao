// src/app/layout.tsx

import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Controle de Troca de Garrafão',
  description: 'Aplicação para gerenciar a fila de troca de garrafões de água',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-empresaRed text-empresaWhite">
        <header className="p-4 bg-red-800 text-center">
          <h1 className="text-3xl font-bold">Controle de Troca do Garrafão - Grafnet</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
