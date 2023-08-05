import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/DashboardPage";

export const Router = () => {
   return (
      <Routes>
         <Route path="/" element={<Dashboard />} />
      </Routes>
   );
};
