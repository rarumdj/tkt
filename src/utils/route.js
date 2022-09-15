import { Route } from "react-router";
import Dashbaord from "./Dashbaord";

const routes = [{ path: "/", element: <Dashbaord /> }];

export const PageRoutes = routes.map(({ path, element }, key) => (
  <Route path={path} element={element} key={key} />
));
