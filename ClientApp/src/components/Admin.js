import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import { getProducts } from '../services/product.service';

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    componentDidMount() {
        this.loadProducts();
    }

    render() {
        return (
            <>
                <h1>Admin</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(p =>
                            <tr key={p.id}>
                                <td><Link to={'/admin/product/' + p.id}>{p.name}</Link></td>
                                <td>{p.price}</td>
                            </tr>

                        )}
                    </tbody>
                </table>
                <Outlet />
            </>
        );
    }

    async loadProducts() {
        const data = await getProducts();
        this.setState({ products: data });
    }
}

export default Admin;