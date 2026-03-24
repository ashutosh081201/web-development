import type { Chai } from "../types";  //not functionality only type
import { ChaiCard } from "./ChaiCard";


interface ChaiListsProps{
    items: Chai[]
}


export function ChaiList({items}:ChaiListsProps){
return (
    <div>
        {items.map((chai) => (
            <ChaiCard
            key= {chai.id}
            name= {chai.name}
            price= {chai.price}
            />
        ))}
        </div>
)
}
export default ChaiList