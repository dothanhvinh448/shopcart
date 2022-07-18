const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')


    function momenu(){
        if(document.getElementById('motoggle').style.display == "none"){
          document.getElementById('motoggle').style.display = "";
        }
        return momenu;
      }
// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay:2, y: 10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 1.1, y: 30, stagger: 0.2,})

// HOME
gsap.from('.men', {opacity: 0, duration: 1, delay:0.6, z: 50})
gsap.from('.new', {opacity: 0, duration: 1, delay:2, x: 50,stagger: 0.2,})
gsap.from('.btn-light', {opacity: 0, duration: 0.4, delay:1, y: 30,})

//show header
function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// hiện số khi click add
var carts= document.querySelectorAll('.my-cart-btn');

let products = [
    {
        name: 'Giày 1',
        tag: 's1.jpg',
        price: 250000,
        inCart: 0
    },
    {
        name: 'Giày 2',
        tag: 's2.jpg',
        price: 300000,
        inCart: 0
    },
    {
        name: 'Giày 3',
        tag: 's3.jpg',
        price: 270000,
        inCart: 0
    },
    {
        name: 'Giày 4',
        tag: 's4.jpg',
        price: 520000,
        inCart: 0
    },
    {
        name: 'Áo 1',
        tag: 'product_1.png',
        price: 250000,
        inCart: 0
    },
    {
        name: 'Áo 2',
        tag: 'product_3.png',
        price: 200000,
        inCart: 0
    },
    {
        name: 'Áo 3',
        tag: 'product_9.png',
        price: 250000,
        inCart: 0
    },
    {
        name: 'Áo 4',
        tag: 'product_10.png',
        price: 160000,
        inCart: 0
    },
    {
        name: 'Túi 1',
        tag: 'product_2.png',
        price: 1900000,
        inCart: 0
    },
    {
        name: 'Túi 2',
        tag: 'product_4.png',
        price: 4400000,
        inCart: 0
    },
    {
        name: 'Kính',
        tag: 'product_6.png',
        price: 720000,
        inCart: 0
    },
    {
        name: 'Ví',
        tag: 'product_8.png',
        price: 300000,
        inCart: 0
    },
    {
        name: 'Đồng Hồ 1',
        tag: 'new1.png',
        price: 19000000,
        inCart: 0
    },
    {
        name: 'Đồng Hồ 2',
        tag: 'new2.png',
        price: 30100000,
        inCart: 0
    },
    {
        name: 'Đồng Hồ 3',
        tag: 'new3.png',
        price: 20450000,
        inCart: 0
    },
    {
        name: 'Đồng Hồ 4',
        tag: 'new4.png',
        price: 52000000,
        inCart: 0
    },
];

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumber(products[i]);
        totalCost(products[i]);
    })
}
function loadCartNumber(){
    let productNumber = localStorage.getItem('cartNumber');
    if( productNumber){
        document.querySelector('.cart span').textContent= productNumber;
    }
}

function cartNumber(product){
    let productNumber = localStorage.getItem('cartNumber');
    productNumber = parseInt(productNumber);

    if( productNumber ){
        localStorage.setItem('cartNumber', productNumber + 1);
        document.querySelector('.cart span').textContent = productNumber + 1;
    }else{
        localStorage.setItem('cartNumber',1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
        
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product){
    
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is",cartCost);
    console.log(typeof cartCost);
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);
    }
    else{
            localStorage.setItem('totalCost',product.price);
    }
}


function displayCart(){
    
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
    let productContainer = document.querySelector(".product3");
    let cartCost = localStorage.getItem('totalCost');
    
    if( cartItems && productContainer){
        
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            var gia = item.price.toLocaleString();
            var tong = item.price * item.inCart;
            var tien = tong.toLocaleString();
            productContainer.innerHTML += `
            <tr>
                <th><img src="./assets/images/${item.tag}"</th>
                <th>${gia} VNĐ</th>
                <th>${item.inCart}</th>
                <th>${tien} VNĐ</th>
                <th><button onclick="DELETE()" class="btn btn-danger"><i class="bi bi-trash3-fill"></i></button></th>
            </tr>
            `
        });
        
        productContainer.innerHTML += `
        <div class="tongtien">
            <h4 class="tongtientitle">
                Tổng tiền: ${cartCost} VNĐ
            </h4>
        </div>
        ` 
        return productContainer;
    } 
}
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}
function DELETE(){
   
    
}
console.log()
loadCartNumber();
displayCart();


