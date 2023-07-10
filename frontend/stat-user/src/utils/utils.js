import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import BarChartIcon from "@mui/icons-material/BarChart";
import InventoryIcon from "@mui/icons-material/Inventory";
import NextPlanIcon from "@mui/icons-material/NextPlan";
import DashboardPage from "../pages/dashboard/Dashboard";
import CategoriesPage from "../pages/categories/Categories";
import ReportsPage from "../pages/reports/Reports";
import ProductsPage from "../pages/products/Products";
import PlansPage from "../pages/plans/Plans";

export const PrimaryMenuItems = [
  {
    title: "sidebar.dashboard",
    icon: <DashboardIcon />,
    component: <DashboardPage />,
    path: "/dashboard",
  },
  {
    title: "sidebar.categories",
    icon: <CategoryIcon />,
    component: <CategoriesPage />,
    path: "/categories",
  },
  {
    title: "sidebar.products",
    icon: <InventoryIcon />,
    component: <ProductsPage />,
    path: "/products",
  },
  {
    title: "sidebar.reports",
    icon: <BarChartIcon />,
    component: <ReportsPage />,
    path: "/reports",
  },
  {
    title: "sidebar.plans",
    icon: <NextPlanIcon />,
    component: <PlansPage />,
    path: "/plans",
  },
];
