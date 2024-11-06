require('dotenv').config();

const mysql = require("mysql");
const express = require("express");
var cors = require("cors");

const body_parser = require("body-parser");

var app = express();
app.use(cors());

// Use  body parser as middle ware
app.use(body_parser.urlencoded({ extended: true }));

var mysqlConnection = mysql.createConnection({
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //path to mysql sock in MAMP
  user: process.env.USER,
  password: process.env.PW,
  host: "localhost",
  database: process.env.DB,
});

mysqlConnection.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected");
});

// Install: Create the tables necessary
app.get("/install", (req, res) => {
  let message = "Tables Created";
  // products table
  let createProducts = `CREATE TABLE if not exists Products(
        product_id int auto_increment,
        product_url varchar(255) not null,
        product_name varchar(255) not null,
        
        PRIMARY KEY (product_id)
    )`;

  // product description table
  let createProductDescription = `CREATE TABLE if not exists ProductDescription(
      description_id int auto_increment,
      product_id int(11) not null,
      product_brief_description VARCHAR(500) not null,
      product_description TEXT not null,
      product_img VARCHAR(500) not null,
      product_link VARCHAR(500) not null,

      PRIMARY KEY (description_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;
  // product price table
  let createProductPrice = `CREATE TABLE if not exists ProductPrice(
      price_id int auto_increment,
      product_id int(11) not null,    
      starting_price varchar(255) not null,
      price_range varchar(255) not null,

      PRIMARY KEY (price_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;

  mysqlConnection.query(createProducts, (err) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductDescription, (err) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductPrice, (err, results) => {
    if (err) console.log(err);
  });

  res.end(message);
});



// Insert a new iPhone
app.post("/add-product", (req, res) => {
  // products table
  let product_name = req.body.product_name;
  let product_url = req.body.product_url;
  // product_description table
  let product_brief_description = req.body.product_brief_description;
  let product_description = req.body.product_description;
  let product_img = req.body.product_img;
  let product_link = req.body.product_link;
  // ProductPrice table
  let starting_price = req.body.starting_price;
  let price_range = req.body.price_range;

  let insertProduct = `INSERT INTO products (product_url,product_name) VALUES ("${product_url}", "${product_name}") ;`;

  mysqlConnection.query(insertProduct, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
  });
  const selectPID = `SELECT product_id FROM products WHERE product_name = "${product_name}"`;

  mysqlConnection.query(selectPID, (err, result) => {
    const PId = result[0].product_id;
    if (err) {
      console.log(err);
      res.end(err);
    } else {

      let insert_product_des = `INSERT INTO ProductDescription(product_id,product_brief_description,product_description,product_img,product_link) VALUES ("${PId}","${product_brief_description}","${product_description}","${product_img}","${product_link}")`;

      let insert_Product_price = `INSERT INTO ProductPrice(product_id,starting_price,price_range) VALUES ("${PId}","${starting_price}", "${price_range}") ;`;


      mysqlConnection.query(insert_product_des, (err) => {
        if (err) {
          console.log(err);
          res.end(err);
        }
      });

      mysqlConnection.query(insert_Product_price, (err) => {
        if (err) {
          console.log(err);
          res.end(err);
        }
      });

    }
    res.send("data inserted");
  });

});

// chatgpt
// app.post("/add-product", (req, res) => {
//   const {
//     product_name,
//     product_url,
//     product_brief_description,
//     product_description,
//     product_img,
//     product_link,
//     starting_price,
//     price_range,
//   } = req.body;

//   const insertProduct = `INSERT INTO products (product_url, product_name) VALUES (?, ?)`;

//   mysqlConnection.query(insertProduct, [product_url, product_name], (err) => {
//     if (err) {
//       console.log("Insert product error:", err);
//       return res.status(500).send(err);
//     }

//     const selectPID = `SELECT product_id FROM products WHERE product_name = ?`;
//     mysqlConnection.query(selectPID, [product_name], (err, result) => {
//       if (err) {
//         console.log("Select product_id error:", err);
//         return res.status(500).send(err);
//       }

//       if (!result.length) {
//         return res.status(404).send("Product ID not found.");
//       }

//       const PId = result[0].product_id;
//       const insertProductDescription = `
//         INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) 
//         VALUES (?, ?, ?, ?, ?)`;
//       const insertProductPrice = `
//         INSERT INTO ProductPrice (product_id, starting_price, price_range) 
//         VALUES (?, ?, ?)`;

//       mysqlConnection.query(
//         insertProductDescription,
//         [PId, product_brief_description, product_description, product_img, product_link],
//         (err) => {
//           if (err) {
//             console.log("Insert product description error:", err);
//             return res.status(500).send(err);
//           }

//           mysqlConnection.query(
//             insertProductPrice,
//             [PId, starting_price, price_range],
//             (err) => {
//               if (err) {
//                 console.log("Insert product price error:", err);
//                 return res.status(500).send(err);
//               }

//               res.send("Data inserted successfully");
//             }
//           );
//         }
//       );
//     });
//   });
// });



//Get all iphone's
app.get("/iphones", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM Products INNER JOIN ProductDescription INNER JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows) => {
      // let iphones = { : [] };
      // iphones.products = rows;
      // var stringIphones = JSON.stringify(iphones);
      if (!err) res.json({ products: rows });
      else console.log(err);
    }
  );
});

app.listen(3001, (err) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log("Listening to : 3001")
  }
});
