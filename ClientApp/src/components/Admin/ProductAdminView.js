import { Form, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const productId = params.id;
    return { productId };
}

function ProductAdminView() {

    const { productId } = useLoaderData();

    return (
        <div>
            <h1>Product {productId}</h1>
        </div>
    );
}

export default ProductAdminView;