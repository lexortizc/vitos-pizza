let menu = {};
let shoppingCartCounter = 0;
const menuItems = document.querySelectorAll('.menu-item');
const shoppingCartTable = document.querySelector("#shopping-cart-products");
const prodMenuItems = document.querySelectorAll('.prod-menu-item');
const sectionCombo = document.querySelector("#products-combos");
const sectionPizza = document.querySelector("#products-pizza");
const sectionBeverage = document.querySelector("#products-beverages");
const sectionDessert = document.querySelector("#products-desserts");

const toggleMobileMenu = () => {
  setTimeout( () => {
    document.querySelector('#nav-menu').classList.toggle('hide-menu-mobile');
  }, 10)
}

document.querySelector('#nav-menu-mobile i').addEventListener('mouseover', toggleMobileMenu);
document.querySelector('#nav-menu-mobile i').addEventListener('mouseout', toggleMobileMenu);

const toggleNotification = () => {
  document.querySelector('#notification').classList.toggle('hide-notification');
}

const toggleShoppingCart = () => {
  const cart = document.querySelector('#shopping-cart-menu');
  if(shoppingCartCounter !== 0 || !cart.classList.contains('hide-cart')) {
    cart.classList.toggle('hide-cart');
  }
}
document.querySelector('#shopping-cart').addEventListener('click', toggleShoppingCart)
document.querySelector('#shopping-cart-close i').addEventListener('click', toggleShoppingCart)

const searchProduct = (idProduct) => {
  let product = [];
  (product.length === 0) ? product = menu.pizza.filter( p => p.id === idProduct ) : null;
  (product.length === 0) ? product = menu.beverage.filter( p => p.id === idProduct ) : null;
  (product.length === 0) ? product = menu.dessert.filter( p => p.id === idProduct ) : null;
  if(product.length === 0) {
    product = menu.combo.filter( p => p.id === idProduct );
    product = product[0].products;
  }
  return product
}

const setShoppingList = (shoppingList) => {
  localStorage.setItem('localShoppingList', JSON.stringify(shoppingList))
}

const getShoppingList = () => {
  let shoppingList = []
  const localShoppingList = localStorage.getItem('localShoppingList')
  if(localShoppingList !== null) {
    shoppingList = JSON.parse(localShoppingList)
  }
  return shoppingList
}

const renderShoppingCart = (products) => {
  let shoppingCartPay = 0;
  let deleteCounter = 0;
  shoppingCartCounter = products.length;
  shoppingCartTable.innerHTML = `<tr class="bold"><td class="text-center">Producto</td><td class="text-center">Eliminar</td></tr>`

  products.forEach( p => {
    const item = `<tr class="thin"><td>${p.name}</td><td><button name="${deleteCounter}" class="btn btn-delete"><i class="fas fa-trash-alt"></i></button></td></tr>`
    shoppingCartTable.insertAdjacentHTML('beforeend', item)
    shoppingCartPay += parseFloat(p.price);
    deleteCounter++;
  })
  document.querySelector('#shopping-cart-items').innerText = shoppingCartCounter.toString();
  document.querySelector('#shopping-cart-pay span').innerText = `$${shoppingCartPay.toFixed(2)}`;

  const btnDelete = document.querySelectorAll('.btn-delete');
  btnDelete.forEach( btn => { btn.addEventListener('click', (e) => { removeProduct(e.target.name) }) })
}

renderShoppingCart(getShoppingList())

const addProduct = (idProduct) => {
  const product = searchProduct(idProduct);
  const products = getShoppingList();
  for (const i in product) {
    products.push(product[i]);
  }
  setShoppingList(products);
  renderShoppingCart(getShoppingList());
}

const removeProduct = (index) => {
  const shoppingCart = getShoppingList();
  shoppingCart.splice(index, 1);
  setShoppingList(shoppingCart);
  renderShoppingCart(shoppingCart);
  (shoppingCart.length === 0) ? toggleShoppingCart() : null;
}

const buyProduct = () => {
  setShoppingList([]);
  renderShoppingCart([]);
  toggleShoppingCart();
  toggleNotification();
  setTimeout(toggleNotification, 2000);
}

document.querySelector('#btn-buy').addEventListener('click', buyProduct);

const renderMenu = (menu) => {
  menu.combo.forEach( combo => { sectionCombo.insertAdjacentHTML('beforeend', comboCardTemplate(combo)); });
  menu.pizza.forEach( pizza => { sectionPizza.insertAdjacentHTML('beforeend', foodCardTemplate(pizza)); });
  menu.beverage.forEach( beverage => { sectionBeverage.insertAdjacentHTML('beforeend', foodCardTemplate(beverage)); });
  menu.dessert.forEach( dessert => { sectionDessert.insertAdjacentHTML('beforeend', foodCardTemplate(dessert)); });

  const btnFood = document.querySelectorAll('.btn-food');
  btnFood.forEach( btn => { btn.addEventListener('click', (e) => { addProduct(e.target.name) }) })
}

const getData = () => {
  fetch('../data/menu.json')
    .then( res => res.json() )
    .then( res => {
      menu = res.menu
      renderMenu(menu)
    })
}

getData();

const activeItem = (item) => {
  prodMenuItems.forEach( element => {
    element.classList.remove('tab-active')
  });
  item.classList.add('tab-active');
}

const showSection = (section) => {
  sectionCombo.classList.remove('product-show');
  sectionPizza.classList.remove('product-show');
  sectionBeverage.classList.remove('product-show');
  sectionDessert.classList.remove('product-show');
  section.classList.add('product-show');
}

const showProductSection = (prodMenuItem, sectionMenu) => {
  activeItem(prodMenuItem);
  showSection(sectionMenu);
}

prodMenuItems[0].addEventListener('click', () => showProductSection(prodMenuItems[0], sectionCombo) );
prodMenuItems[1].addEventListener('click', () => showProductSection(prodMenuItems[1], sectionPizza) );
prodMenuItems[2].addEventListener('click', () => showProductSection(prodMenuItems[2], sectionBeverage) );
prodMenuItems[3].addEventListener('click', () => showProductSection(prodMenuItems[3], sectionDessert) );

menuItems[0].addEventListener('click', () => showProductSection(prodMenuItems[1], sectionPizza) );
menuItems[1].addEventListener('click', () => showProductSection(prodMenuItems[2], sectionBeverage) );
menuItems[2].addEventListener('click', () => showProductSection(prodMenuItems[3], sectionDessert) );


const comboCardTemplate = (combo) => {
  let products = "";
  combo.products.forEach( prod => {
    (prod.name !== prod.description) ? prod.name = `${prod.name} (${prod.description})` : null;
    products += `<li>${prod.name}</li>`
  });

  return `<article class="product flex">
    <img src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" alt="pizza">
    <div id="product-text" class="flex">
      <div class="flex">
        <h3>${combo.name}</h3>
        <h4 class="px-8">$${combo.price}</h4>
      </div>
      <ul>${products}</ul>
      <button class="btn btn-food" name="${combo.id}">Agregar</button>
    </div>
  </article>`
}

const foodCardTemplate = (food) => {
  if(food.name !== food.description) {
    food.name = `${food.name} (${food.description})`
  }

  return `<article class="product flex">
    <img src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" alt="pizza">
    <div id="product-text" class="flex">
      <div class="flex">
        <h3>${food.name}</h3>
        <h4 class="px-8">$${food.price}</h4>
      </div>
      <button class="btn btn-food" name="${food.id}">Agregar</button>
    </div>
  </article>`
}