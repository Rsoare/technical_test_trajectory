
import { Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/DashboardPage";


export const Router = () => {

   return (
      <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
   );
};