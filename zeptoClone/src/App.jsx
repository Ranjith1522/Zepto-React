import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const items = [
    { id: 1, name: 'Kothi meera', price: 20 ,url:"https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/8d42f6c5-4e11-436d-81c4-cc24a3b28bcc.jpeg"},
    { id: 2, name: 'Aloe vera', price: 50 ,url:"https://cdn.zeptonow.com/production/tr:w-403,ar-848-848,pr-true,f-auto,q-80/cms/product_variant/3ba3fb01-303f-422d-b369-22927e8d4522.png"},
    { id: 3, name: 'Ginger', price: 40,url:"https://cdn.zeptonow.com/production/tr:w-403,ar-937-937,pr-true,f-auto,q-80/cms/product_variant/1726bd03-4509-4dc1-b451-212c5b69c922.png"},
    { id: 4, name: 'Chilli', price: 15,url:"https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/831b1429-cec1-4178-811c-3fa88bf689f1.jpeg"},
    { id: 5, name: 'Garlic', price: 45,url:"https://cdn.zeptonow.com/production/tr:w-403,ar-1024-1024,pr-true,f-auto,q-80/cms/product_variant/51f9551f-deda-4549-a408-38e13499a62e.jpeg" },
    { id: 6, name: 'Potato', price: 45,url:"https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/62c6a0ee-22b1-48e7-a29e-fff5bacdab5b.jpeg"},
    { id: 7, name: 'Tomato', price: 60,url:"https://cdn.zeptonow.com/production/tr:w-403,ar-1024-1024,pr-true,f-auto,q-80/cms/product_variant/51f0d9cc-1416-40ae-a035-3923074158d7.jpeg" }
  ];

   function AddToCart() {
    console.log("Added to cart");
  }


  return (
    <>
      <div>
        <h3>Vegetables</h3>
        <div className='main-container'>
          {items.map((item) => {
            return (
              <div className='card'>
                <img src={item.url} alt="image"></img>
                <p>
                  {item.name}
                </p>
                <p>
                  {item.price}
                </p>
                <button className="button btn-primary" onClick={AddToCart} >Add</button>
              </div>
            )
          })}
        </div>

      </div>
    </>
  )
}

export default App
