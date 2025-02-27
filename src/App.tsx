import { Suspense, useLayoutEffect, useState } from "react";
import { Router } from "react-router-dom";
import { browserHistory } from "./browserHistory";
import RouterApp from "./routers/router";

export interface BrowserRouterProps {
  basename?: string;
  children?: React.ReactNode;
  window?: Window;
}

const BrowserRouter = ({ basename, children }: BrowserRouterProps) => {
  const [state, setState] = useState({
    action: browserHistory.action,
    location: browserHistory.location,
  });

  useLayoutEffect(() => browserHistory.listen(setState), []);
  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={browserHistory}
    />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <RouterApp />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
