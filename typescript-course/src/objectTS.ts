let tea: {
    name : string;
    price: number;
    isHot: boolean;

}
tea = {
    name: "GingerTea",
    price: 25,
    isHot: true
}
type Tea = {
    name : string;
    price: number;
    ingredients: string[];

}

const adrakChai: Tea = {
  name: "AdrakTea",
  price: 25,
    ingredients: ["ginger", "tea leaves"]
};

type Brewc= {brewTime: number}
const coffee = {brewTime:5, beans:"Arabics"}
const chaiBrew: Brewc = coffee;

type Chai= {
    name:string;
    price: number;
    isHot:boolean
}

//partial
const updateChai = (updates : Partial<Chai>)=>{
    console.log(updates)
}
updateChai({price:25});
updateChai({});

type Chai2= {
    name?:string;
    price?: number;
}

//Required
const updateChai2 = (updates : Required<Chai2>)=>{}

type Chai3= {
    name:string;
    price: number;
    isHot:boolean;
    ingredients: string[];
}

type BasicChaiInfo = Pick<Chai3, "name"| "price">
const chaiInfo: BasicChaiInfo ={
    name: "lemon tea",
    price: 30
}

type Chai4 = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo2 = Omit<Chai4, "ingredients">;
const chaiInfo2: BasicChaiInfo2 = {
  name: "lemon tea",
  price: 30,
  isHot:true
};

