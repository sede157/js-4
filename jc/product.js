const getproducts = async() =>{
    const {data} = await axios.get("https://fakestoreapi.com/products/category");
    return data.products;
}

const displayproducts = async() => {
    const products = await getproducts();
    const result = products.map(product =>
    `<div class='product'>
        <h2>${product.title}</h2>
    </div>`
    )
  console.log(result);
}

displayproducts ();