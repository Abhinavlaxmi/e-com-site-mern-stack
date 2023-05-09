import React, { useEffect, useState } from 'react'
import Navbar from '../../shared/Navbar'
import axios from 'axios'

const Home = () => {
    const [productList, setProductList] = useState([])

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = async() =>{
        await axios.get('http://localhost:5000/products').then((result)=>{
            let temp = result
            if(temp.status == 200){
                setProductList(temp.data)
            }else {
                alert("No data found")
            }
        })
        console.log(productList)

    }
    return (
        <>
            <Navbar />
            <div>
                <div class="grid gap-4 grid-cols-4 p-5 bg-slate-500 grid-rows-3">
                    <div className='bg-white text-black border border-solid border-black rounded-lg '>
                        <div>
                            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' />
                        </div>
                        <div className='flex m-1 justify-between'>
                            <div className='ml-2'>
                            <h1>Name</h1>
                            </div>
                            <div className='mr-2'>
                            <h5>Price</h5>
                            </div>
                        </div>
                        <div><p>Description</p></div>
                    </div>
                    {productList?.map((product)=> ( <div className='bg-white text-black border border-solid border-black rounded-lg '>
                        <div>
                            <img src={product.image} className='h-36' />
                        </div>
                        <div className='flex m-1 justify-between'>
                            <div className='ml-2'>
                            <h1>{product.name}</h1>
                            </div>
                            <div className='mr-2'>
                            <h5>{product.price}</h5>
                            </div>
                        </div>
                        <div className='p-2'><p>{product.description}</p></div>
                    </div>
                    ))}
                    <div>Two</div>
                    <div>Three</div>
                    <div>Four</div>
                    <div>Five</div>
                    <div>Six</div>
                    <div>Seven</div>
                    <div>Eight</div>
                </div>
            </div>
        </>
    )
}

export default Home