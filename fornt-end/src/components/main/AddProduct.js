import React, { useState } from 'react'
import Navbar from '../../shared/Navbar'
import axios from 'axios';

const AddProduct = () => {

  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [category, setCategory] = useState()
  const [brand, setBrand] = useState()
  const [image, setImage] = useState()
  const [description, setDescription] = useState()
  const [mandatory, setMandatory] = useState(false)

  const addProductHandler = (e) =>{
    e.preventDefault()
    let userId = localStorage.getItem('user')
    // console.log(userId)
    if(!name || !price || !category || !brand || !image || !description) {
      setMandatory(true)
      return false
    }
    console.log("Add product")
    axios.post('http://localhost:5000/add-product', {name, price, category, brand, image, description,userId}).then((result)=>{
      console.log(result)
    })
  }


  return (
    <>
      <Navbar />
      <div className='flex justify-center h-full mt-16 '>
        <form className='bg-slate-100'>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12 p-5">
              <h1 className="text-base font-bold leading-7 text-gray-900">Add Products</h1>
              <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                  <div className="mt-1">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input type="text" name="name" id="name"
                        className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Product name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                      {!name && mandatory && <span className="text-red-700 text-sm">Please enter valid name</span>}
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                  <div className="mt-1">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input type="text" name="category" id="category"
                        className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Enter category"
                        onChange={(e) => setCategory(e.target.value)}
                      />
                    </div>
                    {!category && mandatory && <span className="text-red-700 text-sm">Please enter valid category</span>}
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                  <div className="mt-1">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input type="text" name="price" id="price"
                        className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    {!price && mandatory && <span className="text-red-700 text-sm">Please enter valid price</span>}
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">Brand</label>
                  <div className="mt-1">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input type="text" name="brand" id="brand"
                        className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Enter brand"
                        onChange={(e) => setBrand(e.target.value)}
                      />
                    </div>
                    {!brand && mandatory && <span className="text-red-700 text-sm">Please enter valid brand</span>}
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">Image Link</label>
                  <div className="mt-1">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input type="text" name="image" id="image" 
                      className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                      placeholder="Enter image" 
                      onChange={(e) => setImage(e.target.value)}
                      />
                    </div>
                    {!image && mandatory && <span className="text-red-700 text-sm">Please enter valid image link</span>}
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                  <div className="mt-1">
                    <textarea id="about" name="about" rows="3" 
                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                    onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  {!description && mandatory && <span className="text-red-700 text-sm">Write a few sentences about product.</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
            <button type="submit" onClick={(e)=>addProductHandler(e)} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddProduct