import { useState, useRef, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, UserData } from '../interfaces/reqResInterface';
export const useUsuarios = () => {
  const [users, setUsers] = useState<UserData[]>([]);

  const pageRef = useRef(1);

  useEffect(() => {
    // llamado al API
    chargeUsers();
  }, []);

  const chargeUsers = async () => {
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params: { page: pageRef.current },
    });
    if (resp.data.data.length > 0) {
      setUsers(resp.data.data);
    } else {
      pageRef.current--;
      alert("There's no more registers");
    }
  };

  const nextPage = async () => {
    pageRef.current++;
    chargeUsers();
  };
  const previousPage = async () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      chargeUsers();
    } else {
      alert("There's no more registers");
    }
  };

  return {
    users,
    nextPage,
    previousPage,
  };
};
