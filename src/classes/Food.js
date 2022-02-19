const CurlyFries1 = require("../assets/curlyFries1.jpg");
const CurlyFries2 = require("../assets/curlyFries2.jpg");
const TornadoFries1 = require("../assets/tornadoFries.jpg");
const SweetPotatoFries1 = require("../assets/sweetPotatoFries.jpg");
const CrinkleFries1 = require("../assets/crinkleFries.jpg");
const ChiliFries1 = require("../assets/chiliFries.jpg");

export let CurlyFries = {
  name: "Curly Fries",
  type: "Fries",
  price: 169.99,
  discount: 20,
  discountPrice: 135.99,
  flavors: ["Original", "Cheese", "Barbeque"],
  pictures: [CurlyFries1, CurlyFries2],
};

export let TornadoFries = {
  name: "Tornado Fries",
  type: "Fries",
  price: 150.00,
  pictures: [TornadoFries1],
};

export let SweetPotatoFries = {
  name: "Sweet Potato Fries",
  type: "Fries",
  price: 179.00,
  pictures: [SweetPotatoFries1],
};

export let CrinkleFries = {
  name: "Crinkle Fries",
  type: "Fries",
  price: 130.00,
  pictures: [CrinkleFries1],
};

export let ChiliFries = {
  name: "Chili Fries",
  type: "Fries",
  price: 169.99,
  pictures: [ChiliFries1],
};