import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

function Cart() {
  const [cartdata,setcartdata]=useState([])
    const [error,setError]=useState(null) 
//  const fetchData=async()=>{
//   try{
//   const res=await fetch(`http://localhost:8000/api/v1/mycart ${id}`)
//        if(res.ok){
//          const data=await res.json()
//          setcartdata(data.data)
//        }
//        if(!res.ok){
//          throw new Error("failed to ferch product data")
//        }
//      }catch(err){
//        setError(err)
//      }
//    }
//    useEffect(()=>{
//      fetchData()
//    },[])

  return (
    <div>
      {
        cartdata?.length>0? cartdata.map((el)=>{
          <div >
      <section >
        <div className=''>
          <div className='flex justify-between gap-22 text-[20px] font-bold '>

        <div>
            <p>Product</p>  
        </div>
        <div>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
        </div>
          </div>

        <div>
          <div className='flex gap-3'>

          <div className='h-[87px] w-[83px]'>
            <img src={el.image} alt="cartimage" />
          </div>
          <div>
            <h1>{el.title}</h1>
            <p>{el.color}</p>
            <p>{el.size}</p>
          </div>
          </div>

          <div>
            <p>{el.price}</p>
          </div>
          <div>
            <p>{el.quantity}</p>
          </div>
          <div>
            <p>{el.total}</p>
          </div>
        </div>

        </div>

      </section>

      <section>

      </section>
      </div>
        }):<div>no data</div>
      }
      

    </div>
  )
}

export default Cart
