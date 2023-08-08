import React from "react";
import { useLoaderData, Outlet } from "react-router-dom";
import { getProduct } from "../../services/product.service";

export async function loader({ params }) {
    const productId = params.id;
    const product = await getProduct(productId);
    return { product };
}

function ProductAdminView() {

    const { product } = useLoaderData();

    return (
        <>
        <div>
            <h1>Product {product.name}</h1>
        </div>
        <Outlet />
        </>
    );
}

export default ProductAdminView;