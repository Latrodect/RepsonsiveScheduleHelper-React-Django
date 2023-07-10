import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Loader from "../components/common/Loader";
import AppLayout from "../components/layouts/AppLayout";
import TokenValidationExp from "../components/token/TokenValidation";
import { PATHS } from "./paths";

export default function Route() {
  return useRoutes([
    { path: PATHS.auth.signIn, element: <SignIn /> },
    {
      path: PATHS.main,
      element: (
        <TokenValidationExp>
          <AppLayout />
        </TokenValidationExp>
      ),
      children: [
        { path: PATHS.dashboard, element: <Dashboard /> },
        { path: PATHS.categories, element: <Categories /> },
        { path: PATHS.reports, element: <Reports /> },
        { path: PATHS.plans, element: <Plans /> },
        { path: PATHS.products, element: <Products /> },
      ],
    },
  ]);
}

const SignIn = Loader(lazy(() => import("../components/sign/SignInForm")));
const Dashboard = Loader(lazy(() => import("../pages/dashboard/Dashboard")));
const Categories = Loader(lazy(() => import("../pages/categories/Categories")));
const Reports = Loader(lazy(() => import("../pages/reports/Reports")));
const Plans = Loader(lazy(() => import("../pages/plans/Plans")));
const Products = Loader(lazy(() => import("../pages/products/Products")));
