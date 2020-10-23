import Food from '../js/food.js'

export default {
  menu: {
    pizza: [
      new Food("pz-01","Pizza personal","Pizza personal",4.99,"https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
      new Food("pz-02","Pizza grande","Pizza grande",7.99,"https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
      new Food("pz-03","Pizza gigante","Pizza gigante",11.99,"https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
      new Food("pz-04","Pizza cuatro","Pizza cuatro",14.99,"https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
      new Food("pz-05","Pizza cheese","Pizza cheese",7.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
      new Food("pz-06","Pizza suprema","Pizza suprema",7.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")
    ],
    beverage: [
      new Food("br-01","Vaso soda","8 Oz",0.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
      new Food("br-02","Vaso soda","12 Oz",1.49,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
      new Food("br-03","Vaso soda","16 Oz",1.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
      new Food("br-04","Vaso soda","24 Oz",0.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
      new Food("br-05","Pichel soda","1.5 lt",0.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
      new Food("br-06","Pichel soda","2.5 lt",0.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")
    ],
    dessert: [
      new Food("ds-01","Tres leches","Tres leches",1.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
      new Food("ds-02","Vaso de Flan","Vaso de Flan",0.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
      new Food("ds-03","Vaso de Gelatina","Vaso de Gelatina",0.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
      new Food("ds-04","Cheesecake","Cheesecake",2.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
      new Food("ds-05","Brownie","Brownie",1.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
      new Food("ds-06","Pie de manzana","Pie de manzana",0.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")
    ],
    combo: [
      {
        id: "cb-01",
        name: "Combo 1",
        products: [
          new Food("pz-01","Pizza personal","Pizza personal",4.99,"https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
          new Food("br-01","Vaso soda","8 Oz",0.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")
        ],
        price: 6.48
      },
      {
        id: "cb-02",
        name: "Combo 2",
        products: [
          new Food("ds-05","Brownie","Brownie",1.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
          new Food("br-02","Vaso soda","12 Oz",1.49,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")
        ],
        "price": 3.48
      },
      {
        id: "cb-03",
        name: "Combo 3",
        products: [
          new Food("pz-01","Pizza personal","Pizza personal",4.99,"https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
          new Food("br-02","Vaso soda","12 Oz",1.49,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
          new Food("ds-05","Brownie","Brownie",1.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")
        ],
        price: 8.47
      },
      {
        id: "cb-04",
        name: "Combo 4",
        products: [
          new Food("pz-01","Pizza personal","Pizza personal",4.99,"https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
          new Food("pz-01","Pizza personal","Pizza personal",4.99,"https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
          new Food("br-02","Vaso soda","12 Oz",1.49,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
          new Food("br-02","Vaso soda","12 Oz",1.49,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")
        ],
        price: 12.96
      },
      {
        id: "cb-05",
        name: "Combo 5",
        products: [
          new Food("pz-03","Pizza gigante","Pizza gigante",11.99,"https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
          new Food("br-05","Pichel soda","1.5 lt",0.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")
        ],
        price: 14.98
      },
      {
        id: "cb-06",
        name: "Combo 6",
        products: [
          new Food("pz-04","Pizza cuatro","Pizza cuatro",14.99,"https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"),
          new Food("br-06","Pichel soda","2.5 lt",0.99,"https://images.unsplash.com/photo-1577126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")
        ],
        price: 19.98
      }
    ]
  }
}