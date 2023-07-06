import DashboardIcon from '@mui/icons-material/Dashboard'
import CategoryIcon from '@mui/icons-material/Category'
import BarChartIcon from '@mui/icons-material/BarChart'
import InventoryIcon from '@mui/icons-material/Inventory'
import NextPlanIcon from '@mui/icons-material/NextPlan'
import DashboardPage from '../pages/dashboard/dashboard'
import CategoriesPage from '../pages/categories/categories'
import ReportsPage from '../pages/reports/reports'
import ProductsPage from '../pages/products/products'
import PlansPage from '../pages/plans/plans'

export const PrimaryMenuItems = [
    {
        title:'Dashboard',
        icon:<DashboardIcon/>,
        component:<DashboardPage/>,
        path:'/dashboard'
    },
    {
        title:'Categories',
        icon:<CategoryIcon/>,
        component:<CategoriesPage/>,
        path:'/categories'
    },
    {
        title:'Products',
        icon:<InventoryIcon/>,
        component:<ProductsPage/>,
        path:'/products'
    },
    {
        title:'Reports',
        icon:<BarChartIcon/>,
        component:<ReportsPage/>,
        path:'/reports'
    },
    {
        title:'Plans',
        icon:<NextPlanIcon/>,
        component:<PlansPage/>,
        path:'/plans'
    }
]