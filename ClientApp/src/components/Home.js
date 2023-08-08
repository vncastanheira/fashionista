import React, { Component } from 'react';
import { getProducts } from '../services/product.service';

export default class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    componentDidMount() {
        this.loadProducts();
    }

    render() {
        let productList = this.state.products;
        if (this.state.products.length != 0) {
            return (
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map(product =>
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            );
        } 
    }

    async loadProducts() {
        const data = await getProducts();
        this.setState({ products: data });
    }
}
