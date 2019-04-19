
import state from './States';

export const saleProducts = (state) => {
    let saleProducts = state.products.map(product => {
        return {
            name: product.name,
            price: product.price / 2
        }
    })
    return saleProducts;
};

export const initData = (state)=>{
    return 
}


