const express = require('express');
require('./db/config');
const User = require('./db/User');
const Product = require('./db/Product');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  let user = new User(req.body)
  let result = await user.save();
  result = result.toObject();
  delete result.password
  resp.send(result)
})

app.post("/login", async (req, resp) => {
  console.log(req.body)
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user)
    } else {
      resp.send({ result: 'No data found' })
    }
  } else {
    resp.send({result : 'Email / password is missing'})
  }
});

app.post("/add-product", async (req, resp) => {
  let product = new Product(req.body)
  let result = await product.save();
  resp.send(result)
});

app.get("/products", async (req, resp) => {
  let product = await Product.find();
  if(product.length > 0){
    resp.send(product)
  } else{
    resp.send({result: "No data found"})
  }
})

app.delete("/product/:id", async(req, resp)=>{
  const result = await Product.deleteOne({_id:req.params.id})
  resp.send(result);
  console.log(resp , "Request")
})

app.listen(5000);


// const mongoose = require('mongoose');

// const main = async () => {
//   mongoose.connect('mongodb://127.0.0.1:27017/e-com')
//   .then(() => console.log('Connected!'));
//   const ProductSchema = new mongoose.Schema({
//     name: String,
//     brand: String,
//     price: Number,
//     category: String
//   });
//   const ProductsModel = mongoose.model('products', ProductSchema);
//   let data = new ProductsModel({name : "note 8 ", brand : "MI", price : "18000", category : "Mobile"});
//   let result = await data.save();
//   console.log("Saved", result)
// }
// main()



// ................All in one page.......................

// const mongoose = require('mongoose');
// const express = require('express');
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());

//   mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
//   .then(() => console.log('Yes Abhinav you are Connected!'));
//   const UserSchema = new mongoose.Schema({
//     name :String,
//     email: String,
//     password: String
//   });

//  let User = mongoose.model("users", UserSchema)

// app.post("/register", async (req, resp)=>{
//   let user =new User(req.body)
//   let result = await user.save();
//     resp.send(result)
// })

// app.listen(5000);