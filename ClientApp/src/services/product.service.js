export const getProducts = async () => {
    console.debug('fetching products')
    return await fetch('/products')
        .then(response => response.json());
}

export const getProduct = async(id) => {
    console.debug('fetching product', id)
    return await fetch(`/products/${id}`)
        .then(response => response.json());
}