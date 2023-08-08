import React, { Component } from 'react';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Layout from './components/Layout';
import Home from "./components/Home";
import Admin from "./components/Admin";
import ProductAdminView, { loader as productLoader } from "./components/Admin/ProductAdminView";

import './custom.scss';

export default class App extends Component {
  static displayName = App.name;

  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: 'home',
            element: <Home/ >
          },
          {
            path: 'admin',
            element: <Admin />
          },
          {
            path: 'admin/product/:id',
            loader: productLoader,
            element: <ProductAdminView />
          }
        ]
      },
    ]);

    return(
        <RouterProvider router={router} />
    );
  }
}
