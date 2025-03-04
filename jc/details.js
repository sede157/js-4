const getcategoryproducts = async() =>{



    const urlparams = new URLSearchParams(window.location.search);
    const category = urlparams.get('category');

    const {data} = await axios.get(`https://fakestoreapi.com/products/category/${category}`);

    return data;

}

const displayproducts = async() =>{
    const products = await getcategoryproducts();
    const result = products.map((product)=>{
        return `<div class='product'>
        <img src=${product.image} />
        <h2>${product.title}</h2>
        <p>${product.price}</p>
        <a href='product.html?id=${product.id}'>details</a>
        </div>`

    } ).join('')
    document.querySelector(".products .row").innerHTML = result;
    console.log(products);
}
displayproducts();


