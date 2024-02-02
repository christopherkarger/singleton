import { useSingletonHook } from "./hooks/singleton";
import { useEvents } from "./hooks/use-events";

export const AnotherChild = () => {
  const { test, setTest } = useSingletonHook(useEvents);

  return (
    <div>
      <h1>Another Child - useEvents</h1>
      <button type="button" onClick={() => setTest((c) => c + 1)}>
        Count up
      </button>
      <div>{test}</div>
    </div>
  );
};
