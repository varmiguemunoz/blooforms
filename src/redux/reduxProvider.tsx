import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}
