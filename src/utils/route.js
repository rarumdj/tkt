import { Route } from "react-router";
import Dashbaord from "../pages/Dashbaord";
import DetailsPage from "../pages/DetailsPage";

const routes = [
  { path: "/", element: <Dashbaord /> },
  { path: "/details/:id", element: <DetailsPage /> },
];

export const PageRoutes = routes.map(({ path, element }, key) => (
  <Route path={path} element={element} key={key} />
));
