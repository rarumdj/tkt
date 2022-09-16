import { Route } from "react-router-dom";
import "./App.css";
import DashboardNavbar from "./components/DashboardNavbar";
import SideBar from "./components/SideBar";
import Dashbaord from "./pages/Dashbaord";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <div className="flex bg-white md:flex-row flex-col h-screen">
      <aside className="h-screen md:flex hidden flex-initial">
        <SideBar />
      </aside>
      <main className="flex-1 h-screen overflow-y-scroll">
        <DashboardNavbar />
        <section className="relative py-8 lg:pl-8 sm:pl-4 md:pl-0 md-pr-0 pl-2 lg:pr-8 sm:pr-4 pr-2 max-w-[110rem] mx-auto">
          <Route path="/" component={Dashbaord} exact={true} />
          <Route path="/business-details/:id" component={DetailsPage} exact={true} />
        </section>
      </main>
    </div>
  );
}

export default App;
