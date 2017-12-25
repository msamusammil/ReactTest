/**
 * This is an object that represents the state, it can be a good idea to
 * put it in a separate file so you can reference it easier. It returns the 
 * default products and an empty array as the cart, initialstate for 'cart'
 */
export default {
    cart: [],
    products: [
      {
        id: 1,
        name: "Product A",
        price: 100
      },
      {
        id: 2,
        name: "Product B",
        price: 200
      },
      {
        id: 3,
        name: "Product C",
        price: 150
      },
      {
        id: 4,
        name: "Product D",
        price: 50
      },
      {
        id: 5,
        name: "Product E",
        price: 250
      },
      {
        id: 6,
        name: "Product F",
        price: 300
      }
    ]
  }