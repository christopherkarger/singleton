import { useEffect, useState } from "react";
import { useSingletonHook } from "./singleton";

export const useEventsBody = () => {
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

export const useEvents = () => useSingletonHook(useEventsBody);
