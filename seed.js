const mongoose = require("mongoose");
const Item = require("./models/Item"); // adjust path if needed
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const items = [
  {
    name: "Red T-Shirt",
    category: "Clothing",
    price: 19.99,
    image: "https://tse2.mm.bing.net/th/id/OIP._KwYF6nuCGvUM-nSdumLhAHaJ4?pid=Api&P=0&h=220",
  },
  {
    name: "Blue Jeans",
    category: "Clothing",
    price: 39.99,
    image: "https://tse4.mm.bing.net/th/id/OIP.SZXogIXelMKv3e_Hv1AxGAHaGq?pid=Api&P=0&h=220",
  },
  {
    name: "Black Hoodie",
    category: "Clothing",
    price: 49.99,
    image:
      "https://sp.yimg.com/ib/th?id=OPHS.Udn078I5HobHvg474C474&o=5&pid=21.1&w=160&h=105",
  },
  {
    name: "White Shirt",
    category: "Clothing",
    price: 29.99,
    image: "https://tse4.mm.bing.net/th/id/OIP.y-gpdq1JDesnCip9c_6TjAHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Green Jacket",
    category: "Clothing",
    price: 59.99,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.nKoL14r_g1w4GF5FrQw9VgHaJQ?pid=Api&P=0&h=220",
  },
  {
    name: "Yellow Dress",
    category: "Clothing",
    price: 69.99,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.HhFQqpIs7zNGeZMVaL8vzgHaLH?pid=Api&P=0&h=220",
  },
  {
    name: "Purple Sweater",
    category: "Clothing",
    price: 34.99,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.1t2IFYkWsO-q5GgLXiguMQHaJE?pid=Api&P=0&h=220",
  },
  {
    name: "Orange Shorts",
    category: "Clothing",
    price: 24.99,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.cUIYp9kePFGuchA9eyXxfgHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Pink Skirt",
    category: "Clothing",
    price: 29.99,
    image: "https://tse4.mm.bing.net/th/id/OIP.E65IWa4tuckI7lHVAcbeVwHaJ4?pid=Api&P=0&h=220",
  },
  {
    name: "Gray Sweatpants",
    category: "Clothing",
    price: 39.99,
    image:
      "https://sp.yimg.com/ib/th?id=OPHS.0V6uwFHQ7nipnA474C474&o=5&pid=21.1&w=160&h=105",
  },
  {
    name: "Red T-Shirt",
    category: "Clothing",
    price: 19.99,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.6ghX36qfSRKsiis2rGisdgHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Blue Jeans",
    category: "Clothing",
    price: 39.99,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.B-s8DRq02bs9jh82tI_hvAHaJ4?pid=Api&P=0&h=220",
  },
  {
    name: "Sneakers",
    category: "Footwear",
    price: 59.99,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.dtY1qot0pli5U2aQHALLtwHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Leather Wallet",
    category: "Accessories",
    price: 29.99,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.zPjDNqGYaEjNbCsjKJOfvwHaFj?pid=Api&P=0&h=220",
  },
  {
    name: "Smartphone",
    category: "Electronics",
    price: 499.99,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.uq51xRRlTwx0dyY3iBHtFgHaEK?pid=Api&P=0&h=220",
  },
  {
    name: "Headphones",
    category: "Electronics",
    price: 79.99,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.VRoOI2wqOcSBbDH5RjCrxwHaHa?pid=Api&P=0&h=220",
  },
  // Footwear
  {
    name: "Sneakers",
    category: "Footwear",
    price: 59.99,
    image: "https://tse1.mm.bing.net/th/id/OIP.e7gfwzA4U3tyKGqR8sKguAHaE8?pid=Api&P=0&h=220",
  },
  {
    name: "Leather Boots",
    category: "Footwear",
    price: 89.99,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.oXpWcEAYVWdzJzfYCmA2egHaFj?pid=Api&P=0&h=220",
  },
  {
    name: "Running Shoes",
    category: "Footwear",
    price: 69.99,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.zHy8gVAqgYvtHVGKFjNLSQHaE8?pid=Api&P=0&h=220",
  },
  {
    name: "Flip Flops",
    category: "Footwear",
    price: 19.99,
    image: "https://sp.yimg.com/ib/th?id=OPHS.rs7XuzMYPZy2nA474C474&o=5&pid=21.1&w=160&h=105",
  },
  {
    name: "High Heels",
    category: "Footwear",
    price: 79.99,
    image: "https://tse2.mm.bing.net/th/id/OIP.9bsH56O68AKPUlrEKc4z8AHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Sandals",
    category: "Footwear",
    price: 29.99,
    image: "https://tse4.mm.bing.net/th/id/OIP.v97F1Cae0VMOWvNBVvSVpQHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Slip-ons",
    category: "Footwear",
    price: 39.99,
    image: "https://tse1.mm.bing.net/th/id/OIP.mfwcbzJyRyG8X9Aq-g06PgHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Hiking Boots",
    category: "Footwear",
    price: 99.99,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.6Vj-oeoB3AzOkFTdw4TdZQHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Loafers",
    category: "Footwear",
    price: 49.99,
    image: "https://tse3.mm.bing.net/th/id/OIP.koIQvMKc6Ag2PLxZYexbHQHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Basketball Shoes",
    category: "Footwear",
    price: 79.99,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.J8D4Pdotx-uo7PQcUchaXwHaHa?pid=Api&P=0&h=220",
  },

  // Accessories
  {
    name: "Leather Wallet",
    category: "Accessories",
    price: 29.99,
    image: "https://tse3.mm.bing.net/th/id/OIP.XYjwCi0UnTF9shcnXkDx6AHaEJ?pid=Api&P=0&h=220",
  },
  {
    name: "Sunglasses",
    category: "Accessories",
    price: 19.99,
    image: "https://tse1.mm.bing.net/th/id/OIP.6cQrgVUYEK4ZZx1wsYwxsgHaJQ?pid=Api&P=0&h=220",
  },
  {
    name: "Watch",
    category: "Accessories",
    price: 99.99,
    image: "https://sp.yimg.com/ib/th?id=OPHS.ExxsnIRPeN5CIw474C474&o=5&pid=21.1&w=160&h=105",
  },
  {
    name: "Backpack",
    category: "Accessories",
    price: 49.99,
    image: "https://sp.yimg.com/ib/th?id=OPHS.58f4fD2sVcAIAw474C474&o=5&pid=21.1&w=160&h=105",
  },
  {
    name: "Belt",
    category: "Accessories",
    price: 19.99,
    image: "https://sp.yimg.com/ib/th?id=OPHS.0ZIxy2kEKeOpAw474C474&o=5&pid=21.1&w=160&h=105",
  },
  {
    name: "Cap",
    category: "Accessories",
    price: 14.99,
    image: "https://tse4.mm.bing.net/th/id/OIP.A960D_cHUrJptzeN4IE0ZgHaF7?pid=Api&P=0&h=220",
  },
  {
    name: "Scarf",
    category: "Accessories",
    price: 24.99,
    image: "https://tse2.mm.bing.net/th/id/OIP.1n-Do1p_a9rl5RYL_c-NNAHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Gloves",
    category: "Accessories",
    price: 19.99,
    image: "https://tse1.mm.bing.net/th/id/OIP.TdtSQEXB0jYPOfZy1f0pRAHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Necklace",
    category: "Accessories",
    price: 29.99,
    image: "https://tse2.mm.bing.net/th/id/OIP.TRNG3HRLvwlA_6Pqfvm-9QHaJ4?pid=Api&P=0&h=220",
  },
  {
    name: "Bracelet",
    category: "Accessories",
    price: 19.99,
    image: "https://tse2.mm.bing.net/th/id/OIP.lEdQic_mNZUFyfqh8MAVyQHaJQ?pid=Api&P=0&h=220",
  },

  // Electronics
  {
    name: "Smartphone",
    category: "Electronics",
    price: 499.99,
    image: "https://tse1.mm.bing.net/th/id/OIP.8lVUKQr3ZFZ92YtiWAiuGQHaE7?pid=Api&P=0&h=220",
  },
  {
    name: "Headphones",
    category: "Electronics",
    price: 79.99,
    image: "https://tse2.mm.bing.net/th/id/OIP.VRoOI2wqOcSBbDH5RjCrxwHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Laptop",
    category: "Electronics",
    price: 899.99,
    image: "https://tse3.mm.bing.net/th/id/OIP.-x6-SOr0MSNyJ-Sg3OuRbwHaE8?pid=Api&P=0&h=220",
  },
  {
    name: "Smartwatch",
    category: "Electronics",
    price: 199.99,
    image: "https://tse4.mm.bing.net/th/id/OIP.YmsD3Gih-BRWaETvycMp4wHaH4?pid=Api&P=0&h=220",
  },
  {
    name: "Tablet",
    category: "Electronics",
    price: 299.99,
    image: "https://tse4.mm.bing.net/th/id/OIP.lUhOnQVpr_vRUbTk4n14ogHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Camera",
    category: "Electronics",
    price: 399.99,
    image: "https://tse1.mm.bing.net/th/id/OIP.0lxRsfgkqLRRKOtUJqEjHQHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Speaker",
    category: "Electronics",
    price: 99.99,
    image: "https://tse4.mm.bing.net/th/id/OIP.Fw1Wm2yYHtK6Go6tmsFr7QHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Gaming Console",
    category: "Electronics",
    price: 499.99,
    image: "https://tse3.mm.bing.net/th/id/OIP.-iIpF_QSNdRFe9xSLcRj2AHaFj?pid=Api&P=0&h=220",
  },
  {
    name: "Drone",
    category: "Electronics",
    price: 299.99,
    image: "https://tse1.mm.bing.net/th/id/OIP.FdXlZZh_2llyTzi6p9fUtQHaE8?pid=Api&P=0&h=220",
  },
  {
    name: "Keyboard",
    category: "Electronics",
    price: 49.99,
    image: "https://tse3.mm.bing.net/th/id/OIP.hRjqO3SQYtReehqnUZxKTgHaEP?pid=Api&P=0&h=220",
  },
];

async function seed() {
  try {
    await Item.deleteMany({});
    await Item.insertMany(items);
    console.log("Database seeded with valid images!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
