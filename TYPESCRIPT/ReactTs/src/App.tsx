import ChaiCard from './components/ChaiCard.tsx'
import { Counter } from './components/Counter.tsx'
import { ChaiList}  from './components/ChaiList.tsx';
import type { Chai } from './types/types.ts';
import { OrderForm } from './components/OrderForm.tsx';

const menu: Chai[] = [
  {id:1, name: "masala", price: 25},
  {id:2, name: "ginger", price: 35},
  {id:3, name: "elaichi", price: 45},
  {id:4, name: "cardimon", price: 15},
];

function App() {
  return (
    <>
      <div>
        <ChaiCard
          name = "headphone"
          price = {5000}
          />
          <ChaiCard
          name = "mobile Charger"
          price = {7000}
          />
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList
          items={menu}
        />
      </div>
      <div>
        <OrderForm
          onSubmit={(order)=>{
            console.log("Order", order.name, order.cups)
          }}
        />
      </div>
    </>
  )
}
export default App
 