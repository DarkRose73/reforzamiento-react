export const TiposBasicos = () => {
  const nombre: string = 'Joan';
  const edad: number = 23;
  const estaActivo: boolean = false;
  const poderes: (string | number)[] = [];

  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre},{edad},{estaActivo ? 'Activo' : 'No Activo'}
      <br />
      {poderes.join(', ')}
    </>
  );
};
