interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direction;
}

interface Direction {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: 'Joan',
    edad: 23,
    direccion: { pais: 'Chile', casaNo: 42 },
  };

  return (
    <>
      <h3>ObjetosLiterales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
