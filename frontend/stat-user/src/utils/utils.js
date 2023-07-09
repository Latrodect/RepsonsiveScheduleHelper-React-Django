import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import BarChartIcon from "@mui/icons-material/BarChart";
import InventoryIcon from "@mui/icons-material/Inventory";
import NextPlanIcon from "@mui/icons-material/NextPlan";
import DashboardPage from "../pages/dashboard/dashboard";
import CategoriesPage from "../pages/categories/categories";
import ReportsPage from "../pages/reports/reports";
import ProductsPage from "../pages/products/products";
import PlansPage from "../pages/plans/plans";

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
