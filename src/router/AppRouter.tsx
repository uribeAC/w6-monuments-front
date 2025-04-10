import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import MonumentsPage from "../monument/pages/MonumentsPage/MonumentsPage";
import AddMonumentPage from "../monument/pages/AddMonumentPage/AddMonumentPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/monuments" />} />
        <Route path="monuments" element={<MonumentsPage />} />
        <Route path="add" element={<AddMonumentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
