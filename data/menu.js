export default {
  "menu": {
    "pizza": [
      {
        "id": "pz-01",
        "name": "Pizza personal",
        "description": "Pizza personal",
        "price": "4.99"
      },
      {
        "id": "pz-02",
        "name": "Pizza grande",
        "description": "Pizza grande",
        "price": "7.99"
      },
      {
        "id": "pz-03",
        "name": "Pizza gigante",
        "description": "Pizza gigante",
        "price": "11.99"
      },
      {
        "id": "pz-04",
        "name": "Pizza cuatro",
        "description": "Pizza cuatro",
        "price": "14.99"
      },
      {
        "id": "pz-05",
        "name": "Pizza cheese",
        "description": "Pizza cheese",
        "price": "7.99"
      },
      {
        "id": "pz-06",
        "name": "Pizza suprema",
        "description": "Pizza suprema",
        "price": "7.99"
      }
    ],
    "beverage": [
      {
        "id": "br-01",
        "name": "Vaso soda",
        "description": "8 Oz",
        "price": "0.99"
      },
      {
        "id": "br-02",
        "name": "Vaso soda",
        "description": "12 Oz",
        "price": "1.49"
      },
      {
        "id": "br-03",
        "name": "Vaso soda",
        "description": "16 Oz",
        "price": "1.99"
      },
      {
        "id": "br-04",
        "name": "Vaso soda",
        "description": "24 Oz",
        "price": "2.49"
      },
      {
        "id": "br-05",
        "name": "Pichel soda",
        "description": "1.5 lt",
        "price": "2.99"
      },
      {
        "id": "br-06",
        "name": "Pichel soda",
        "description": "2.5 lt",
        "price": "4.99"
      }
    ],
    "dessert": [
      {
        "id": "ds-01",
        "name": "Tres leches",
        "description": "Tres leches",
        "price": "1.99"
      },
      {
        "id": "ds-02",
        "name": "Vaso de Flan",
        "description": "Vaso de Flan",
        "price": "0.99"
      },
      {
        "id": "ds-03",
        "name": "Vaso de Gelatina",
        "description": "Vaso de Gelatina",
        "price": "0.99"
      },
      {
        "id": "ds-04",
        "name": "Cheesecake",
        "description": "Cheesecake",
        "price": "2.99"
      },
      {
        "id": "ds-05",
        "name": "Brownie",
        "description": "Brownie",
        "price": "1.99"
      },
      {
        "id": "ds-06",
        "name": "Pie de manzana",
        "description": "Pie de manzana",
        "price": "4.99"
      }
    ],
    "combo": [
      {
        "id": "cm-01",
        "name": "Combo 1",
        "products": [
          {
            "id": "pz-01",
            "name": "Pizza personal",
            "description": "Pizza personal",
            "price": "4.99",
            "quantity": 1
          },
          {
            "id": "br-02",
            "name": "Vaso soda",
            "description": "12 Oz",
            "price": "1.49",
            "quantity": 1
          }
        ],
        "price": 6.48
      },
      {
        "id": "cm-02",
        "name": "Combo 2",
        "products": [
          {
            "id": "ds-05",
            "name": "Brownie",
            "description": "Brownie",
            "price": "1.99",
            "quantity": 1
          },
          {
            "id": "br-02",
            "name": "Vaso soda",
            "description": "12 Oz",
            "price": "1.49",
            "quantity": 1
          }
        ],
        "price": 3.48
      },
      {
        "id": "cm-03",
        "name": "Combo 3",
        "products": [
          {
            "id": "pz-01",
            "name": "Pizza personal",
            "description": "Pizza personal",
            "price": "4.99",
            "quantity": 1
          },
          {
            "id": "ds-05",
            "name": "Brownie",
            "description": "Brownie",
            "price": "1.99",
            "quantity": 1
          },
          {
            "id": "br-02",
            "name": "Vaso soda",
            "description": "12 Oz",
            "price": "1.49",
            "quantity": 1
          }
        ],
        "price": 8.47
      },
      {
        "id": "cm-04",
        "name": "Combo 4",
        "products": [
          {
            "id": "pz-01",
            "name": "Pizza personal",
            "description": "Pizza personal",
            "price": "4.99",
            "quantity": 2
          },
          {
            "id": "br-02",
            "name": "Vaso soda",
            "description": "12 Oz",
            "price": "1.49",
            "quantity": 2
          }
        ],
        "price": 12.96
      },
      {
        "id": "cm-05",
        "name": "Combo 5",
        "products": [
          {
            "id": "pz-03",
            "name": "Pizza gigante",
            "description": "Pizza gigante",
            "price": "11.99",
            "quantity": 1
          },
          {
            "id": "br-05",
            "name": "Pichel soda",
            "description": "1.5 lt",
            "price": "2.99",
            "quantity": 1
          }
        ],
        "price": 14.98
      },
      {
        "id": "cm-06",
        "name": "Combo 6",
        "products": [
          {
            "id": "pz-04",
            "name": "Pizza cuatro",
            "description": "Pizza cuatro",
            "price": "14.99",
            "quantity": 1
          },
          {
            "id": "br-06",
            "name": "Pichel soda",
            "description": "2.5 lt",
            "price": "4.99",
            "quantity": 1
          }
        ],
        "price": 19.98
      }
    ]
  }
}