function makeChai(type: string, cups: number) {
  console.log("Making");
}
makeChai("Masala", 2);

function makeChai2(): number {
  return 25;
}
makeChai2();

function logChai(): void{
    console.log("Ready");
}

function createChai(order:{
    type:string;
    sugar:number;
    size:"small"|"large",
    isHot:boolean

}){}