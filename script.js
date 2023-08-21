const commandMenuActivator=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const cardsConteiner=document.querySelector('.cards-container');
const productCardDetail=document.querySelector('.product-detail');
const navbarCard=document.querySelector('.navbar-shopping-cart');


navbarCard.addEventListener('click',activator2);
commandMenuActivator.addEventListener('click', activator);

function activator2(){
    productCardDetail.classList.toggle('inactivity');
}
function activator(){
    desktopMenu.classList.toggle('inactivity');
}  

const productos=[];
productos.push({img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
precio:"120",
titulo:"bike",
imgcard:"./icons/bt_add_to_cart.svg",
});
productos.push({img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
precio:"120",
titulo:"bike",
imgcard:"./icons/bt_add_to_cart.svg",
});
productos.push({img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
precio:"120",
titulo:"bike",
imgcard:"./icons/bt_add_to_cart.svg",
});
productos.push({img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
precio:"120",
titulo:"bike",
imgcard:"./icons/bt_add_to_cart.svg",
});

for ( product of productos ){
   const productCard=document.createElement('div');
   productCard.classList.add('product-card');
   
   const productImg=document.createElement('img');
   productImg.setAttribute('src',product.img);

   const productInfo=document.createElement('div');
   productInfo.classList.add('product-info');



   const productInfoDiv=document.createElement('div');

   const productPrice=document.createElement('p');
   productPrice.innerText= '$' + product.precio;
   const productName=document.createElement('p');
   productName.innerText = product.titulo;

   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);

   const productInfoFigure=document.createElement('figure');
   const productImgCart = document.createElement('img');
   productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

   productInfoFigure.appendChild(productImgCart);


   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);

   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);

   cardsConteiner.appendChild(productCard);
}

