import { App } from "App";
import { AppLayout } from "components/layout";
import { Route, Routes } from "react-router";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<App />} />
      </Route>
    </Routes>
  );
}
