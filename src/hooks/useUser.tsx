import { useEffect, useState } from "react";
import { useSingletonHook } from "./singleton";

export const useUserBody = () => {
  const [user, setUser] = useState<string>();
  const [test, setTest] = useState<number>(0);

  useEffect(() => {
    fetch("/assets/user.json").then(() => setUser("UserInfo"));
  }, []);

  return {
    user,
    test,
    setTest,
  };
};

export const useUser = () => useSingletonHook(useUserBody);
