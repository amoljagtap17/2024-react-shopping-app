import { useStore } from "app/store";
import { AppLayout } from "components/layout";
import { FourOhFour } from "components/lib";
import { lazy } from "react";
import { Route, Routes } from "react-router";

const HomePage = lazy(() =>
  import("./home").then(module => ({ default: module.HomePage }))
);

export function AppRoutes() {
  const store = useStore();

  console.log("store::", store);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<FourOhFour />} />
      </Route>
    </Routes>
  );
}
