import { useState } from 'react';
export const useCounter = (initialValue: number = 10) => {
  const [valor, setValor] = useState(initialValue);
  const acumular = (numero: number) => {
    setValor(valor + numero);
  };

  return {
    valor,
    acumular,
  };
};
