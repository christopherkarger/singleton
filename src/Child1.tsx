import { useEffect, useState } from "react";
import { AnotherChild } from "./AnotherChild";
import { Child2 } from "./Child2";
import { useSingletonHook } from "./hooks/singleton";
import { useUser } from "./hooks/useUser";

export const Child1 = () => {
  const { user, test, setTest } = useSingletonHook(useUser);
  const [showChild2, setShowChild2] = useState(false);

  useEffect(() => {
    console.log("child1 - user is", user);
  }, [user]);

  return (
    <div>
      <h1>Child1 - useUser</h1>
      <button type="button" onClick={() => setTest((c) => c + 1)}>
        Count up
      </button>
      <div>{test}</div>

      <br />
      <br />

      <Child2 headline="Child2" />

      <br />
      <br />
      <button type="button" onClick={() => setShowChild2(!showChild2)}>
        Toggle Child
      </button>

      <br />
      <br />

      {showChild2 && <AnotherChild />}

      {/* {showChild2 && <Child2 headline="Child3" />} */}
    </div>
  );
};
