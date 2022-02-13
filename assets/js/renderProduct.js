let products1 = [
    {
    id: "71Bca",
    name: "ÁO THUN NAM SAVE MS 58E3056",
    url: "../assets/image/sp1.jpg",
    price: 1190000,
    sale: 45,
    status: 1
    },
    {
        id: "71Bca",
        name: "ÁO THUN NAM SAVE MS 58E3056",
        url: "../assets/image/sp2.jpg",
        price: 1190000,
        sale: 0,
        status: 0
    },
    {
        id: "71Bca",
        name: "ÁO THUN NAM SAVE MS 58E3056",
        url: "../assets/image/sp3.jpg",
        price: 1190000,
        sale: 45,
        status: 0
    },
    {
        id: "71Bca",
        name: "ÁO THUN NAM SAVE MS 58E3056",
        url: "../assets/image/sp3.jpg",
        price: 1190000,
        sale: 45,
        status: 0
    },
    {
        id: "71Bca",
        name: "ÁO THUN NAM SAVE MS 58E3056",
        url: "../assets/image/sp3.jpg",
        price: 1190000,
        sale: 45,
        status: 0
    },
    {
        id: "71Bca",
        name: "ÁO THUN NAM SAVE MS 58E3056",
        url: "../assets/image/sp3.jpg",
        price: 1190000,
        sale: 45,
        status: 0
    }
]

function renderProducts(products, parentElementSelector) {
    let parentElement = document.querySelector(".render__products")
    console.log(parentElement)
    let htmlProduct = products.map(product => {
        let sale = ""
        let price = product.price
        let productNew = ""
        if(product.sale) {
            sale = "product-block--sale"
            price = product.price * ( 100 - product.sale) /100
        }
        if(product.status) {
            productNew = "product--new"
        }
        let productHtml = `
        <div class="col l-3 m-6 c-12">
            <a href="./chi-tiet-san-pham.html" class="product--detail">
              <div class="product--img" style="background-image: url(${product.url});"></div>
              <div class="product--info">
                <h4 class="product__title">${product.name} MS ${product.id}</h4>
                <p class="product__prices">
                  <span class="product__price old ${sale}">${product.price}
                    <sup>đ</sup>
                  </span>
                  <span class="product__price">${price}
                    <sup>đ</sup>
                  </span>
                </p>
              </div>
              <div class="product--sale ${sale}">${product.sale}%</div>
              <div class="product--status ${productNew}">NEW</div>
            </a>
        </div>
        `
        return productHtml
    })
    html = htmlProduct.join('');
    parentElement.innerHTML = `<div class="grid1"><div class="row">${html}</div></div>`
}

renderProducts(products1, "render__products")