import { useCounter } from '../hooks/useCounter';

const ContadorConHook = () => {
  const { valor, acumular } = useCounter();

  return (
    <>
      <h3>
        Contador con hook: <small>{valor}</small>
      </h3>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          acumular(1);
        }}
      >
        +1
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          acumular(-1);
        }}
      >
        -1
      </button>
    </>
  );
};

export default ContadorConHook;
