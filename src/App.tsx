import "./App.css";
import { Child1 } from "./Child1";
import { SingletonHookProvider } from "./hooks/singleton";
import { useEvents } from "./hooks/useEvents";
import { useUser } from "./hooks/useUser";

function App() {
  return (
    <SingletonHookProvider hooks={[useUser, useEvents]}>
      <Child1 />
    </SingletonHookProvider>
  );
}

export default App;
