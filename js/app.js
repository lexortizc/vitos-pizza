const prodMenuItem = document.querySelectorAll('.prod-menu-item');
const sectionCombo = document.querySelector("#products-combos");
const sectionPizza = document.querySelector("#products-pizza");
const sectionBeverage = document.querySelector("#products-beverages");
const sectionDessert = document.querySelector("#products-desserts");

const renderMenu = (menu) => {
  menu.combo.forEach( combo => {
    sectionCombo.insertAdjacentHTML('beforeend', comboCardTemplate(combo));
  });

  menu.pizza.forEach( pizza => {
    sectionPizza.insertAdjacentHTML('beforeend', foodCardTemplate(pizza));
  });

  menu.beverage.forEach( beverage => {
    sectionBeverage.insertAdjacentHTML('beforeend', foodCardTemplate(beverage));
  });

  menu.dessert.forEach( dessert => {
    sectionDessert.insertAdjacentHTML('beforeend', foodCardTemplate(dessert));
  });
}

const getData = () => {
  fetch('../data/menu.json')
    .then( res => res.json())
    .then( res => renderMenu(res.menu))
}

getData();

const activeItem = (item) => {
  prodMenuItem.forEach( element => {
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

prodMenuItem[0].addEventListener('click', () => showProductSection(prodMenuItem[0], sectionCombo) );
prodMenuItem[1].addEventListener('click', () => showProductSection(prodMenuItem[1], sectionPizza) );
prodMenuItem[2].addEventListener('click', () => showProductSection(prodMenuItem[2], sectionBeverage) );
prodMenuItem[3].addEventListener('click', () => showProductSection(prodMenuItem[3], sectionDessert) );


const comboCardTemplate = (combo) => {
  let products = "";
  combo.products.forEach( prod => {
    if(prod.name === prod.description) {
      products += `<li>${prod.name}</li>`
    } else {
      products += `<li>${prod.name} (${prod.description})</li>`
    }
  });

  return `<article class="product flex">
    <img src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" alt="pizza">
    <div id="product-text" class="flex">
      <div class="flex">
        <h3>${combo.name}</h3>
        <h4 class="px-8">$${combo.price}</h4>
      </div>
      <ul>${products}</ul>
      <button class="btn">Agregar</button>
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
      <button class="btn">Agregar</button>
    </div>
  </article>`
}