import React, { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar";
import axios from "axios";

const DeleteProduct = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await axios.get("http://localhost:5000/products").then((result) => {
      let temp = result;
      if (temp.status == 200) {
        setProductList(temp.data);
      } else {
        setProductList([])
        alert("No data found");
      }
    });
    console.log(productList);
  };

  const deleteProduct = (id) => {

    let url = 'http://localhost:5000/product/' + id ;

    axios.delete(url).then((result)=>{
        console.log(result, "Delete response" )
    })
  }

  return (
    <>
      <Navbar />
      <div>
        <table class="table-auto w-full border border-slate-500">
          <thead>
            <tr>
              <th className="w-1/5">Image</th>
              <th className="w-1/5">Name</th>
              <th className="w-1/5">Price</th>
              <th className="w-1/5">Description</th>
              <th className="w-1/5"></th>
            </tr>
          </thead>
          <tbody>
            {productList.length <= 0? <tr><td>No data found</td></tr>
            :
            productList?.map((product)=>(<tr>
              <td><img src={product.image} className="h-24" /></td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td className="items-center">
              <button onClick={()=>deleteProduct(product._id)} className="bg-slate-500 text-white p-2 border rounded-lg">Delete</button>
              </td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DeleteProduct;
