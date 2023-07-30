import React, { Component } from 'react';

export class Home extends Component {
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
        const response = await fetch('products');
        const data = await response.json();
        this.setState({ products: data });
    }
}
