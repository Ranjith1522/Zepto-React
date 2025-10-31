import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const items = [
    {id: 1,name: 'Kothi meera',price: 20},
    {id: 2,name: 'Bendakaya',price: 50},
    {id: 3,name: 'Dhondakaya',price: 40},
    {id: 4,name: 'curry leaves',price: 15},
    {id: 5,name: 'Tomato',price: 45},
    {id: 6,name: 'Potato',price: 45},
    {id: 7,name: 'Eggs',price: 60}
  ]
  return (
    <>
    <div>
  
      <div className='main-container'>
          {items.map((item) => {
            return (
              <div className='card'>
                <p>
                  {item.name}
                </p>
                <p>
                  {item.price}
                </p>
              </div>
            )
          })}
      </div>
          
    </div>
    </>
  )
}

export default App
