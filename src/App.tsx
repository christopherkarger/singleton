import "./App.css";
import { Child1 } from "./Child1";
import { SingletonHookProvider } from "./hooks/singleton";
import { useEventsBody } from "./hooks/useEvents";
import { useUserBody } from "./hooks/useUser";

function App() {
  return (
    <SingletonHookProvider hooks={[useUserBody, useEventsBody]}>
      <Child1 />
    </SingletonHookProvider>
  );
}

export default App;
