import data from '../data/menu.js';

const prodMenuItem = document.querySelectorAll('.prod-menu-item');
const sectionCombo = document.querySelector("#products-combos");
const sectionPizza = document.querySelector("#products-pizza");
const sectionBeveraage = document.querySelector("#products-beverages");
const sectionDessert = document.querySelector("#products-desserts");

prodMenuItem[0].addEventListener('click', () => {
  activeItem(prodMenuItem[0]);
  showSecction(sectionCombo);
});

prodMenuItem[1].addEventListener('click', () => {
  activeItem(prodMenuItem[1]);
  showSecction(sectionPizza);
});

prodMenuItem[2].addEventListener('click', () => {
  activeItem(prodMenuItem[2]);
  showSecction(sectionBeveraage);
});

prodMenuItem[3].addEventListener('click', () => {
  activeItem(prodMenuItem[3]);
  showSecction(sectionDessert);
});

const activeItem = (item) => {
  prodMenuItem.forEach( element => {
    element.classList.remove('tab-active')
  });
  item.classList.add('tab-active');
}

const showSecction = (section) => {
  sectionCombo.classList.remove('product-show');
  sectionPizza.classList.remove('product-show');
  sectionBeveraage.classList.remove('product-show');
  sectionDessert.classList.remove('product-show');
  section.classList.add('product-show');
}


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

data.menu.combo.forEach( c => {
  sectionCombo.insertAdjacentHTML('beforeend', comboCardTemplate(c));
});