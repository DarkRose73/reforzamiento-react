import { useForm } from '../hooks/useForm';

export const Forms = () => {
  const { onChange, form, email, password } = useForm({
    email: 'test@test.com',
    password: '123456',
  });

  return (
    <>
      <h3>Formularios</h3>

      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={({ target }) => onChange(target.value, 'email')}
      ></input>
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={password}
        onChange={({ target }) => onChange(target.value, 'password')}
      ></input>

      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  );
};
