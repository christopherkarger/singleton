import { useEvents } from "./hooks/useEvents";

export const AnotherChild = () => {
  const { test, setTest } = useEvents();

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
