

import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { Counter } from './components/Counter';
import type { Chai } from './types.ts';

import ChaiList from './components/ChaiList.tsx';
import OrderForm from './components/OrderForm.tsx';

const menu: Chai[] = [
  { id: 1, name: "MAsala", price: 25 },
  { id: 2, name: "Ginger", price: 35 },
  { id: 3, name: "Lemon", price: 15 },
];



function App() {
 

  return (
    <>
      <div>
        <h1>Vite+React</h1>
        <ChaiCard name="HeadPhones" price={5000} />
        <ChaiCard name="IPhones" price={75000} />
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList items= {menu} />
      </div>
      <div>
        <OrderForm 
        onSubmit={(order) => {
          console.log(order.name, order.cups);
        }}
        />
        <button type='submit'>Place Order</button>
      </div>
    </>
  );
}

export default App
