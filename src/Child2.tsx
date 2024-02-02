import { useEffect } from "react";
import { useUser } from "./hooks/useUser";

export const Child2 = (props: { headline: string }) => {
  const { user, test, setTest } = useUser();

  useEffect(() => {
    console.log("child2 - user is", user);
  }, [user]);

  return (
    <div>
      <h1>{props.headline} - useUser</h1>
      <button type="button" onClick={() => setTest((c) => c + 1)}>
        Count up
      </button>
      <div>{test}</div>
    </div>
  );
};
