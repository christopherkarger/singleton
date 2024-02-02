import { useEffect, useState } from "react";

export const useEvents = () => {
  const [event, setEvent] = useState<string>();
  const [test, setTest] = useState<number>(0);

  useEffect(() => {
    fetch("/assets/events.json").then(() => setEvent("EventInfo"));
  }, []);

  return {
    event,
    test,
    setTest,
  };
};
