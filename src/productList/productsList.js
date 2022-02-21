import React, { Component } from "react";
import Productcard from "../components/productcard";


class ProductList extends Component {
    render() {
        const { products } = this.props;

        return (
            <React.Fragment>
                {products.map((product) => (
                    <Productcard 
                    key={product.id} 
                    product={product} />   
                )
                )
                }
            </React.Fragment>
            
        );
    }
}
export default ProductList;