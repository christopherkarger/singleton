import { AnotherChild } from "./AnotherChild";
import "./App.css";
import { Child1 } from "./Child1";
import { SingletonHookProvider } from "./hooks/singleton";
import { useEvents } from "./hooks/use-events";
import { useUser } from "./hooks/useUser";

function App() {
  return (
    <SingletonHookProvider hooks={[useUser, useEvents]}>
      <Child1 />
      <AnotherChild />
    </SingletonHookProvider>
  );
}

export default App;
