import { Home } from "./components/Home";
import { Admin } from "./components/Admin";
import ProductAdminView from "./components/Admin/ProductAdminView";

const AppRoutes = [
  {
    path: '/',
    index: true,
    element: <Home />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: 'admin/product/:id',
    element: <ProductAdminView />
  }
];

export default AppRoutes;
