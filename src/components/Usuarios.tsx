import { UserData } from '../interfaces/reqResInterface';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {
  const { users, nextPage, previousPage } = useUsuarios();

  const renderItem = ({
    id,
    last_name,
    first_name,
    email,
    avatar,
  }: UserData) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 50, borderRadius: 100 }}
          ></img>
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-primary mx-2" onClick={previousPage}>
        Anteriores
      </button>
      <button className="btn btn-primary" onClick={nextPage}>
        Siguientes
      </button>
    </>
  );
};
