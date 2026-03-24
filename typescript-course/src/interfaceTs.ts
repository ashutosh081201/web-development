type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType){
    console.log(t);
}

interface Recipe{
    size: "small" | "large" ;
}

class Chai implements Recipe{
    size: "small" | "large" = "large";
} 


//INTERSECTION

type BaseChai = {teaLeaves: number};
type Extra = {masala: number};

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai ={
    teaLeaves:2,
    masala:1
}