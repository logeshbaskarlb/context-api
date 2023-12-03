import React, { useContext } from 'react'
import Header from './Header';
import Productlist from '../Context/Productlist';
import Cards from './Cards';


const MainPage =()=> {
  const {products,loading} = useContext(Productlist)
  return (
    <div className='container-fluid m-0 p-0'>
      <Header/>
      <main>
        <section id="product" className='container px-4 px-lg-5 mt-5 col-mb-6'>
          <div className='row gx-4 gx-lg-5 row-cols row-cols-md-2 row-cols-xl-4 justify-content-center'>
            <div className='col mb-5'>
              {
                loading ? <h1 className='text-center '>....</h1>:
                products.map((item,index)=>{
                  return <Cards product={item} key={index}/>
                })
              }
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default MainPage