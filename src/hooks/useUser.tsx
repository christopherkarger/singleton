import { useEffect, useState } from "react";

export const useUser = () => {
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
