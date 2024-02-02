import { ReactNode, createContext, memo, useContext } from "react";

export const Context = createContext<{ useHook: unknown; id: string }[]>([]);

interface ISingletonHookProvider {
  children: ReactNode;
  hooks: Array<() => unknown>;
}

export const SingletonHookProvider = memo(
  ({ hooks, children }: ISingletonHookProvider) => {
    if (hooks.some((item) => hooks.indexOf(item) !== hooks.lastIndexOf(item))) {
      throw new Error(
        "There are multiple hooks with the same name, every hook name must be unique"
      );
    }

    const value = hooks.map((h) => ({
      useHook: h(),
      id: h.name,
    }));

    return <Context.Provider value={value}>{children}</Context.Provider>;
  }
);

export function useSingletonHook<T = unknown>(useHook: () => T) {
  const value = useContext(Context);

  const hook = value?.find((h) => h.id === `${useHook.name}`);
  if (!hook) {
    throw new Error(`Hook not found with id: ${useHook.name}`);
  }

  return hook.useHook as T;
}
