import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    };
    // adding this will insure i get the correct info from the data not just a refrence 
    componentDidMount() {
        this.setProducts();
    };
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];

        })
        this.setState(() => {
            return { products: tempProducts }
        })
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                detailProduct: product
            }
        })
    };
    addToCart = (id) => {
        console.log(`hello form add to cart.id is ${id}`);
    };
    // tester = () => {
    //     console.log('state products :', this.state.products[0].inCart);
    //     console.log('data products :', storeProducts[0].inCart);

    //     const tempProducts = [...this.state.products];
    //     tempProducts[0].inCart = true
    //     this.setState(() => {
    //         return { products: tempProducts }
    //     }, () => {
    //         console.log('state products :', this.state.products[0].inCart);
    //         console.log('data products :', storeProducts[0].inCart);
    //     })
    // }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
            }}>
                {this.props.children}

            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };