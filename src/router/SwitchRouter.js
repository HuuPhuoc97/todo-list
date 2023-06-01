import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';
// import { Router } from 'react-router';
import publicRouter from './publicRouter';

const NotFound = lazy(() => import('../modules').then(module => ({ default: module.NotFound })));

const SwitchRouter = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const routers = [];

    if (checkRouter(publicRouter)) {
      routers.push(checkRouter(publicRouter));
    }

    setRoutes(routers);
  }, [setRoutes]);

  const checkRouter = routers => {
    if (routers && Object.keys(routers).length && routers.subRoutes) {
      return routers;
    }
  };

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} exact={route.subRoutes.some(r => r.exact)} path={route.subRoutes.map(r => r.path)}>
              <route.layout>
                {route.subRoutes.map((subRoute, i) => (
                  <Route key={i} {...subRoute} />
                ))}
              </route.layout>
            </Route>
          ))}
          <Route exact component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
};

// export default SwitchRouter;
export default withRouter(SwitchRouter);
